import React, { useRef } from 'react';
import DrawerNavigation from './DrawerNavigation';
import { useDispatch, useSelector } from 'react-redux';
import useOutsideActionListener from 'app/hooks/useOutsideActionListener';
import { actions as globalActions } from 'app/providers/GlobalProvider/slice';
import { makeSelectIsDrawerOpen } from 'app/providers/GlobalProvider/selectors';

const MIN_SCREEN_WIDTH = 1024;

export default function Drawer(props) {
  const dispatch = useDispatch();
  const wrapperRef = useRef(null);
  const isDrawerOpen = useSelector(makeSelectIsDrawerOpen);

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
  }, [handleDrawerState]);

  const onCloseDrawer = () => {
    if (window.innerWidth > MIN_SCREEN_WIDTH) return;
    if (isDrawerOpen) {
      dispatch(globalActions.closeDrawer());
    }
  };

  useOutsideActionListener(
    wrapperRef,
    onCloseDrawer,
    ['menu-open'],
    [isDrawerOpen],
  );
  if (!props.isLoggedIn && window.innerWidth > 1024) {
    return <div />;
  }
  return (
    <div className="drawer" ref={wrapperRef}>
      <DrawerNavigation {...props} />
    </div>
  );
}
