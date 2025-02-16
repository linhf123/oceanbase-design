import { Bar } from '@oceanbase/charts';
import { Col, Row } from '@oceanbase/design';

export default () => {
  const data = [
    {
      year: '1951 年',
      value: 38,
    },
    {
      year: '1952 年',
      value: 52,
    },
    {
      year: '1956 年',
      value: 61,
    },
    {
      year: '1957 年',
      value: 138,
    },
    {
      year: '1958 年',
      value: 48,
    },
  ];
  const config = {
    xField: 'value',
    yField: 'year',
    legend: {
      position: 'top-left',
    },
  };
  console.log(Bar);
  return (
    <Row gutter={200}>
      <Col span={12}>
        <Bar height={200} data={data} {...config} />
      </Col>
      <Col span={12}>
        <Bar height={200} data={data.slice(0, 2)} {...config} />
      </Col>
    </Row>
  );
};
