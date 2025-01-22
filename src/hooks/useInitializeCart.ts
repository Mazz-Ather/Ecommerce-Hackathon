// hooks/useInitializeCart.ts
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setCartFromLocalStorage, setWishlistFromLocalStorage } from '@/app/redux/cartSlice';

const useInitializeCart = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    if (typeof window !== 'undefined') {
      dispatch(setCartFromLocalStorage());
      dispatch(setWishlistFromLocalStorage());
    }
  }, [dispatch]);
};

export default useInitializeCart;
