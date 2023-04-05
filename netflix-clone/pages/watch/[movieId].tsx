import React from "react";
import useMovie from "@/hooks/useMovie";

const MovieId = () => {
  const { data } = useMovie("641db176e526bed82e147043");
  console.log("test", data);
  return <div>test</div>;
};

export default MovieId;
