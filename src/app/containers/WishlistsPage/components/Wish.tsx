import React from 'react';
import { useTranslation } from 'react-i18next';
import { WishProps } from '../types';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import { DEFAULT_LOCALE } from 'locales/i18n';
import {
  RiExternalLinkLine,
  RiLinksLine,
  RiDeleteBin7Line,
} from 'react-icons/ri';
import { translations } from 'locales/i18n';
const useStyles = makeStyles(theme => ({
  root: {
    // maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

const STORE_IMAGE_PATH = '/images/stores/';

export function Wish(props: WishProps): JSX.Element {
  const classes = useStyles();
  const { t } = useTranslation();
  const locale = localStorage.getItem('i18nextLng') || DEFAULT_LOCALE;
  const [isImageBroken, setIsImageBroken] = React.useState(false);
  const handleImageError = (event): void => setIsImageBroken(true);
  const fallbackPhoto = '/images/no-photo.png';
  return (
    <div>
      <Card className={classes.root}>
        <CardHeader
          avatar={
            <Avatar
              aria-label="recipe"
              src={`${STORE_IMAGE_PATH}${props.store.logo}`}
              className={classes.avatar}
            />
          }
          title={props.title}
        />
        {!isImageBroken ? (
          <CardMedia
            className={classes.media}
            title="Paella dish"
            style={{ backgroundImage: `url(${props.image})` }}
          >
            <img
              alt="wish product"
              src={props.image}
              className="none"
              onError={handleImageError}
            />
          </CardMedia>
        ) : (
          <CardMedia
            className={classes.media}
            title="Paella dish"
            image={fallbackPhoto}
          />
        )}
        <CardContent>
          <div className="flex-row space-between">
            <Typography variant="body2" color="textPrimary" component="span">
              {t(translations.wishlists.store())}
            </Typography>{' '}
            <Typography
              variant="body2"
              color="textSecondary"
              component="a"
              href={props.store.origin}
              target="new"
            >
              {props.store.name}
            </Typography>
          </div>
          <div className="flex-row space-between">
            <Typography variant="body2" color="textPrimary" component="span">
              {t(translations.wishlists.price())}
            </Typography>{' '}
            <Typography variant="body2" color="textSecondary" component="span">
              {props.currentPrice} {props.currency}
            </Typography>
          </div>
          <div className="space-between">
            <Typography variant="body2" color="textPrimary" component="span">
              {t(translations.wishlists.dateAdded())}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="span">
              {new Date(props.createdAt as number).toLocaleDateString(locale)}{' '}
              {t(translations.wishlists.at())}{' '}
              {new Date(props.createdAt as number).toLocaleTimeString(locale)}
            </Typography>
          </div>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="share">
            <RiLinksLine />
          </IconButton>
          <IconButton aria-label="visit" href={props.url} target="new">
            <RiExternalLinkLine />
          </IconButton>
          {props.onRemoveWish && (
            <IconButton
              className={classes.expand}
              onClick={() => {
                if (props && props.onRemoveWish) {
                  props.onRemoveWish(props._id);
                }
              }}
              aria-label="remove"
            >
              <RiDeleteBin7Line />
            </IconButton>
          )}
        </CardActions>
      </Card>
    </div>
  );
}
