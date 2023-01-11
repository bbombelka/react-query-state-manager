import { useTimeQuery } from 'api/hooks/useTimeQuery';

export const Time = () => {
  const { data } = useTimeQuery();
  const currentDate = new Date(data.datetime);
  const hours = currentDate.getHours();
  const minutes = currentDate.getMinutes();
  const seconds = currentDate.getSeconds();

  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>
        {hours}:{minutes}:{seconds}
      </h1>
    </div>
  );
};
