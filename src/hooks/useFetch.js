import {useState, useEffect} from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';


export const useFetch = (url)=>{
    const [data, setData] = useState([])
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(false)
    useEffect(()=>{
        const fetchData = async() =>{
            setLoading(true)

            try {
                const res = await fetch(url)
                console.log(res)
                if(!res.ok){
                    setError('failed to fetch');
                    alert('failed to fetch')
                }
                const result = await res.json()
                setData(result.data)
                setLoading(false);
            } catch (err) {
                setError(err.message);
                setLoading(false)
            }
        }
        fetchData();
    }, [url])
    return {
        data,
        error,
        loading
    }
}



export const usePost = (url) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const postData = async (bodyData, action, redirectLink) => {
    setLoading(true);
    console.log("Heyyyyyyyyyyy")
    console.log(bodyData)
    try {
      const response = await fetch(url, {
        method: "POST",
        credentials: "include", // Send cookies
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(bodyData),
      });

      const responseData = await response.json();
      console.log(responseData)
      if (response.ok) {
        console.log("User registered successfully:", responseData);
        setData(responseData);
        dispatch(action(responseData))
        navigate(redirectLink)
      } else {
        console.error("Registration failed:", responseData.message);
        setError(responseData.error || "Failed to fetch");
        console.log(responseData)
      }
    } catch (error) {
      console.error("Error:", error);
      setError(error.error);
    } finally {
      setLoading(false);
    }
  };

  return { data, error, loading, postData };
};

export const usePut = (url)=>{
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const dispatch = useDispatch()
  
    const postData = async (bodyData, action) => {
      setLoading(true);
      console.log("Heyyyyyyyyyyy")
      console.log(bodyData)
      try {
        const response = await fetch(url, {
          method: "PUT",
          credentials: "include", // Send cookies
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(bodyData),
        });
  
        const responseData = await response.json();
  
        if (response.ok) {
          console.log("User registered successfully:", responseData);
          setData(responseData);
          dispatch(action(responseData))
        } else {
          console.error("Registration failed:", responseData.message);
          setError(responseData.error || "Failed to fetch");
          console.log(responseData)
        }
      } catch (error) {
        console.error("Error:", error);
        setError(error.error);
      } finally {
        setLoading(false);
      }
    };
  
    return { data, error, loading, postData };
}

export const UserDetails = ({ userId }) => {
    const [details, setDetails] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const response = await fetch(`https://your-api-endpoint.com/users/${userId}`);
                const data = await response.json();

                if (response.ok) {
                    setDetails(data);
                } else {
                    setError(data.message);
                    setError('failed to fetch');
                }
            } catch (error) {
                setError("An error occurred while fetching data.");
            } finally {
                setLoading(false);
            }
        };

        if (userId) fetchUser();
    }, [userId]); // Runs when userId changes
}

export const useGet = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  console.log(url)
  useEffect(() => {
      const fetchUser = async () => {
          try {
              const response = await fetch(url, {
                method: "GET",
                credentials: "include", // Send cookies
                headers: {
                  "Content-Type": "application/json",
                },
              });
              const data = await response.json();
              console.log(data)
              if (response.ok) {
                  setData(data);
              } else {
                  setError(data.message);
                  setError('failed to fetch');
              }
          } catch (error) {
              setError(error);
          } finally {
              setLoading(false);
          }
      };

      fetchUser();
  }, [url]); // Runs when userId changes
  return { data, error, loading };
}

export const useDelete = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  console.log('helloo')
  console.log(url)
      const fetchData = async (id) => {
          try {
            console.log('heyyyyyyyyyy')
              const response = await fetch(url+id, {
                method: "DELETE",
                credentials: "include", // Send cookies
                headers: {
                  "Content-Type": "application/json",
                },
              });
              const data = await response.json();
              console.log(data)
              if (response.ok) {
                  setData(data);
              } else {
                  setError(data.message);
                  setError('failed to fetch');
              }
          } catch (error) {
              setError(error);
          } finally {
              setLoading(false);
          }
      };

  return { data, error, loading, fetchData };
}
export const useWish = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  console.log('helloo')
  console.log(url)
      const fetchData = async (id) => {
          try {
            console.log('heyyyyyyyyyy')
              const response = await fetch(url+id, {
                method: "POST",
                credentials: "include", // Send cookies
                headers: {
                  "Content-Type": "application/json",
                },
              });
              const data = await response.json();
              console.log(data)
              if (response.ok) {
                  setData(data);
              } else {
                  setError(data.message);
                  setError('failed to fetch');
                  alert('failed to fetch')
              }
          } catch (error) {
              setError(error);
          } finally {
              setLoading(false);
          }
      };

  return { data, error, loading, fetchData };
}