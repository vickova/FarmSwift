import { useMutation, useQuery } from "@tanstack/react-query";
import { useQueryClient } from "@tanstack/react-query";
import axiosInstance from "../lib/axios";
import { useNavigate } from "react-router-dom";
import { LoginSuccess } from "../redux/actions";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";

const fetchData = async (url) => {
    const response = await axiosInstance.get(url);
    console.log({fetchDataResponse:response.data})
    // console.log(response.data)
    return response.data;
  };
  
  // Function for POST requests
  const postData = async (url, data) => {
    console.log({postDataaaFirst:data})
    const response = await axiosInstance.post(url, data);
    return response.data;
  };
  
  // Function for PUT requests
  const putData = async (url, data) => {
    const response = await axiosInstance.put(url, data);
    return response.data;
  };
  
  // Function for DELETE requests
  const deleteData = async (url) => {
    const response = await axiosInstance.delete(url);
    return response.data;
  };

  export const useGetP = (url, key, enabled=true) => {
    const getQuery = useQuery({ 
        queryKey:key,
        queryFn: ()=>fetchData(url),
        enabled:enabled,
        onSuccess:(data)=>{
          toast.success(data?.message || "Successful", {
            position: "top-right",
            autoClose: 2000,
          }); 
        },
        onError:(error)=>{
          console.log(error.response.data.message)
          toast.error(error?.response?.data?.message || "Something went wrong", {
            position: "top-right",
            autoClose: 2000,
          });
        }
    })
    return getQuery
  };
  
  // Custom hook for POST requests
  export const usePost = (url, invalidateKey) => {
    const queryClient = useQueryClient()
    const postMutation = useMutation({
        mutationFn:()=>postData(url),
        onSuccess:(data)=>{
            queryClient.invalidateQueries(invalidateKey)
            console.log(data)
            toast.success(data?.message || "Successful", {
            position: "top-right",
            autoClose: 2000,
          }); 
        },
        onError:(error)=>{
          console.log(error.response.data.message)
          console.log('errorrrr ooooooooooooooooooo')
          toast.error(error?.response?.data?.message || "Something went wrong", {
            position: "top-right",
            autoClose: 2000,
          });        }
    })
    return postMutation
  };
  export const usePostBody = (url, invalidateKey) => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    // console.log({bodyDatttttttt:data})
    const queryClient = useQueryClient()
    const postMutation = useMutation({
        mutationFn:(data)=>postData(url, data),
        onSuccess:(data)=>{
            queryClient.invalidateQueries(['users', invalidateKey])
            console.log(data)
            toast.success(data?.message || "Successful", {
            position: "top-right",
            autoClose: 2000,
          }); 
            if(url.includes('login')){
              console.log({loginData:data})
                localStorage.setItem('user', JSON.stringify(data?.data))
                dispatch(LoginSuccess(data))
                navigate('/')
            }
            else if(url.includes('register')){
                localStorage.setItem('selectedRole', data?.data?.role)
            }
        },
        onError:(error)=>{
          console.log(error.response.data.message)
          toast.error(error?.response?.data?.message || "Something went wrong", {
            position: "top-right",  // use string, not `toast.POSITION.TOP_RIGHT`
            autoClose: 2000,        // in milliseconds
          });
        }
    })
    return postMutation
  };
  
  export const usePaymentResponse = (url)=>{
    const postMutation = useMutation({
    mutationFn:(data)=>postData(url, data),
    onSuccess: (data) => {
      console.log("Payment Response:", data);
      if (data?.success && data?.checkoutUrl) {
        window.location.href = data.checkoutUrl; // Only redirect if it's successful
      } else {
        alert("Payment initialization failed.");
      }
    },
    onError: (error) => {
      console.error("Payment error:", error);
      alert("An error occurred during payment initialization.");
    },
  });
  return postMutation
  }
  
  // Custom hook for PUT requests
  export const usePut = (url) => {
    return useMutation((data) => putData(url, data));
  };
  
  // Custom hook for DELETE requests
  export const useDelete = (url, invalidateKey) => {
    const queryClient = useQueryClient()
    const deleteMutation = useMutation({
        mutationFn:()=>deleteData(url),
        onSuccess:(data)=>{
            queryClient.invalidateQueries(invalidateKey)
            console.log(data)
            toast.success(data?.message || "Successful", {
            position: "top-right",
            autoClose: 2000,
          }); 
        },
        onError:(error)=>{
          console.log(error.response.data.message);
          toast.error(error?.response?.data?.message || "Something went wrong", {
            position: "top-right",  // use string, not `toast.POSITION.TOP_RIGHT`
            autoClose: 2000,        // in milliseconds
          });
        }
    })
    return deleteMutation
  };
  