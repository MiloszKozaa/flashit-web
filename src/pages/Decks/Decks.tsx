import { useQuery } from 'react-query';
import { IDeck } from '../../model/deck';
import { callApi, setToastOnFetchError } from '../../services';
import { Button, Header, Input } from '../../components';
import { FiFolderPlus, FiLayers, FiPlus, FiSearch } from 'react-icons/fi';
import '../../styles/page.scss';
import { ButtonColors } from '../../model/colors';
import './Decks.scss';

const Decks = () => {
  const { data, isLoading } = useQuery({
    queryKey: ['decks-data'],
    queryFn: () => callApi<IDeck[]>('deck', 'GET', null),
    onError: error => setToastOnFetchError(error),
  });

  if (isLoading) {
    return <div>loading...</div>;
  }

  if (data && data.status === 'error') {
    return <div>{data.message}</div>;
  }

  return (
    <div className='FlashIt-page-wrapper'>
      <Header
        content={
          <>
            <Header.Icon icon={<FiLayers />} />{' '}
            <Header.Text text='Your decks' bold />
          </>
        }
      />
      <Input
        id='deck-search'
        placeholder='search'
        type='text'
        icon={<FiSearch />}
      />
      <div className='creating-wrapper'>
        <Button
          colorStyle={ButtonColors.ACCESSORY}
          content={<Button.Icon icon={<FiFolderPlus />} />}
        />
        <Button
          colorStyle={ButtonColors.PRIMARY}
          maxWidth
          content={
            <Button.Content>
              <Button.Text text='Create Deck' />
              <Button.Icon icon={<FiPlus />} />
            </Button.Content>
          }
        />
      </div>
    </div>
  );
};

export default Decks;
