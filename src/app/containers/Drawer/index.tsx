import React, { useRef } from 'react';
import DrawerLogo from './DrawerLogo';
import DrawerNavigation from './DrawerNavigation';
import { useDispatch } from 'react-redux';
import useOutsideActionListener from 'app/hooks/useOutsideActionListener';
import { actions as globalActions } from 'app/providers/GlobalProvider/slice';

const MIN_SCREEN_WIDTH = 1024;

export default function Drawer(props) {
  const handleDrawerState = screenWidth => {
    if (screenWidth > MIN_SCREEN_WIDTH) {
      dispatch(globalActions.openDrawer());
    } else {
      dispatch(globalActions.closeDrawer());
    }
  };
  React.useEffect(() => {
    handleDrawerState(window.innerWidth);
    window.addEventListener('resize', (e: any) =>
      handleDrawerState(e.target.innerWidth),
    );
    return () => {
      window.removeEventListener('resize', () =>
        console.log('removed event listener'),
      );
    };
  }, []);

  const dispatch = useDispatch();
  const wrapperRef = useRef(null);
  const onCloseDrawer = () => {
    if (window.innerWidth > MIN_SCREEN_WIDTH) return;
    dispatch(globalActions.closeDrawer());
  };

  useOutsideActionListener(wrapperRef, onCloseDrawer, ['menu-open']);
  if (!props.isLoggedIn && window.innerWidth > 1024) {
    return <div />;
  }
  return (
    <div className="drawer" ref={wrapperRef}>
      <DrawerLogo />
      <DrawerNavigation {...props} />
    </div>
  );
}
