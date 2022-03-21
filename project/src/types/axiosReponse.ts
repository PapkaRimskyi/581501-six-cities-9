import { AxiosResponse } from 'axios';

type AxiosResponseType<D> = AxiosResponse & D;

export default AxiosResponseType;
