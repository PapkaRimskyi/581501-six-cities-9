import { TypedUseSelectorHook, useSelector } from 'react-redux';
import { RootStateType } from '../store/store';

const useAppSelector: TypedUseSelectorHook<RootStateType> = useSelector;

export default useAppSelector;
