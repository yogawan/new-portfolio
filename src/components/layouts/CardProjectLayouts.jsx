import React, { useEffect, useState } from 'react';
import fetchData from '../../service/api/dataFetching';

import FooterLayouts from './FooterLayouts';

const CardProjectLayouts = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const result = await fetchData();
        setData(result);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    getData();
  }, []);

  if (loading) {
    return <div className='loading'>Loading...</div>;
  }

  if (error) {
    return <div className='loading'>Error: {error}</div>;
  }

  const sortedData = data.data.sort((a, b) => new Date(b.date) - new Date(a.date));
  return (
    <div>
        <div className="card">
            {sortedData.map((item) => (
                <div className="content">
                    <img src={item.img} alt="img" />
                    <div className="title">
                        <h2>{item.title}</h2>
                        <img src="./arrow.svg" alt="" />
                    </div>
                    <hr />
                    <p className='description'>{item.description}</p>
                    <p className='type'>{item.type}</p>
                    <div className="tech">
                        <p>{item.t1}</p>
                        <p>{item.t2}</p>
                        <p>{item.t3}</p>
                        <p>{item.t4}</p>
                    </div>
                    <div className="time">
                        <img src="./time.svg" alt="img" />
                        <p>{item.date}</p>
                    </div>
                    <li>
                        <img src="./link.svg" alt="img" /><a href={item.link}>Go to Project</a>
                    </li>
                </div>
            ))}
        </div>
        <FooterLayouts></FooterLayouts>
    </div>
  );
};

export default CardProjectLayouts;