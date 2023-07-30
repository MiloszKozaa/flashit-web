export type responseModel<TData> =
  | {
      status: 'success';
      content: TData;
    }
  | {
      status: 'error';
      message: string;
    };
