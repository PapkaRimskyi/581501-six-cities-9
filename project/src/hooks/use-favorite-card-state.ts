import { MouseEvent } from 'react';
import {useNavigate} from 'react-router-dom';

import useAppSelector from './use-app-selector';
import useAppDispatch from './use-app-dispatch';

import changeFavoritesStatus from '../store/favorites/thunk/change-favorites-status';

import OfferType from '../types/offer-type/offer-type';

import AUTH_STATUS from '../const/auth-status';
import ROUTES_PATHS from '../const/routes-paths';

function useFavoriteCardState(cardInfo: OfferType) {
  const { authStatus } = useAppSelector((state) => state.auth);
  const favorites = useAppSelector((state) => state.favorites);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  function isCardInFavoriteCollection() {
    const inCollection = favorites.find((favorite) => favorite.id === cardInfo.id);
    return inCollection ? 0 : 1;
  }

  function changeFavoriteFlagStatus(e: MouseEvent) {
    e.preventDefault();
    if (authStatus === AUTH_STATUS.AUTHORIZED) {
      const { id } = cardInfo;
      dispatch(changeFavoritesStatus({ id, status: isCardInFavoriteCollection() }));
    } else {
      navigate(ROUTES_PATHS.LOGIN);
    }
  }

  return { changeFavoriteFlagStatus, isCardInFavoriteCollection };
}

export default useFavoriteCardState;
