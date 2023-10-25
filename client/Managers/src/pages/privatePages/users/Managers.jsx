import useFetch from '../../../hooks/useFetch';
import { useState, useEffect } from "react";
import ManagersTable from "../../../component/partials/users/ManagersTable";

const managers_url = "http://localhost:4000/users/managers/get-all";

function Managers() {
    const [managers, setManagers] = useState([]);

    const [data, loading, error] = useFetch(managers_url);
  
    useEffect(() => {
      if (data) {
        setManagers(data.managers);
     
      }
    }, [data]);
  
    if (loading) {
      return <span>loading...</span>;
    }
  
    if (error) {
      return <span>{error.message}</span>;
    }
  
    return (
      <>
            {managers && (
          <ManagersTable data={managers}/>
        )}
      </>
    )
}

export default Managers