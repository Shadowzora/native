export * from './ConnectConfig';
export * from './DappMetaData';
export * from './RpcUrl';
export * from './WalletType';

interface CommonError {
  code: number;
  message: string;
}

export interface CommonResp<T> {
  data: T | CommonError;
  status: number;
}
