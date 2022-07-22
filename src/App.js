import { useEffect, useState } from "react";
import DataList from "./components/DataList";
import SelectTypeForm from "./components/SelectTypeForm";
import "./styles.css";

export default function App() {
  const [dataType, setDataType] = useState("");
  const [page, setPage] = useState(1)
  const [data, setData] = useState([]);

  // Write code here.
  //

  useEffect(() => {
    fetch(`https://swapi.dev/api/${dataType}/?page=${page}`)
    .then(resp => resp.json())
    .then(resp => {
      console.log('my results', resp)
      setData(resp.results)
    })
  }, [dataType, page])

  return (
    <div>
      <SelectTypeForm setDataType={setDataType}/>
      {data && <DataList dataType={dataType} data={data} />}
      { (!data.length) && (
      <button
        onClick={() => setPage(page+1)}>Next Page</button>)}
        { (page > 1) && (
      <button
        onClick={() => setPage(page-1)}
        >Previous</button>
        )}
    </div>
  );
}
