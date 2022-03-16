import { useDispatch } from 'react-redux';
import { AppDispatchType } from '../store/store';

const useAppDispatch = () => useDispatch<AppDispatchType>();

export default useAppDispatch;
