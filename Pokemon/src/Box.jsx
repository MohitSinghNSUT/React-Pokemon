import { useEffect } from 'react';
import { useState } from 'react';

export const Box = ({ url, inputChange }) => {
  console.log('box is ', inputChange);
  if (!url) {
    return <></>;
  }
  // console.log(url);
  const [loading, setLoading] = useState(1);
  const [error, setError] = useState('');
  const [allApiData, setAllApiData] = useState({});
  const [apidata, setApiData] = useState({});
  // console.log("enter box ",url)
  const FetchDataAsyncAwiat = async () => {
    try {
      const res = await fetch(url);
      const data = await res.json();
      const otherData = data;
      setAllApiData(data);
      setApiData(data);
      setLoading(0);
      // console.log(data);
    } catch (error) {
      setError(error);
      setLoading(0);
    }
  };
  useEffect(() => {
    // console.log("input changes .. ")
    FetchDataAsyncAwiat(url);
  }, []);

  useEffect(() => {
    console.log('input change ', inputChange, ' ', apidata);
    if (inputChange == '') {
      setApiData(allApiData);
    } else if (Object.keys(allApiData).length === 0) {
      setApiData({});
    } else {
      console.log(apidata, ' input change ');
      if (allApiData['name'].includes(inputChange)) {
        setApiData(allApiData);
      } else {
        setApiData({});
      }
      // const updated= apidata.name.
      // .filter((elem)=>{
      //   if(elem.name.includes(inputChange)){
      //     return 1;
      //   }
      //   else return 0;

      // })
      // console.log("updated array ",updated)
      // setApiData(updated);
      //     setLoading(0);
    }
  }, [inputChange]);
  // if (Object.keys(obj).length === 0)
  if (loading || Object.keys(apidata).length === 0) {
    return <p></p>;
  }

  return (
    <>
      <div className="box border-[2px] border-solid border-black h-[25vw] w-[25vw] flex ">
        <div className="image">
          <img src={apidata.sprites.other.dream_world.front_default} alt="" />
        </div>
        <div className="name">{apidata.name}</div>
        <div className="attribute">
          <div className="height">Height: {apidata.height}</div>
          <div className="height">Weight: {apidata.weight}</div>
        </div>
      </div>
    </>
  );
};
