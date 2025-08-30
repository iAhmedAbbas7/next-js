"use client";
import { useParams } from "next/navigation";

const UsersDetail = () => {
  const params = useParams();
  const id = params.id;
  return <div>UsersDetail: {id}</div>;
};

export default UsersDetail;
