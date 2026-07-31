import React from "react";

const Home = ({greet}) => {
  return <div>Home</div>;
};

export default React.memo(Home,(prevProps,nextProps) => {
    return prevProps.user.id === nextProps.user.id
});
