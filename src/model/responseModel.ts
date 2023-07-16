export type responseModel<TData> =
  | {
      status: 'success';
      data: TData;
    }
  | {
      status: 'error';
      message: string;
    };
