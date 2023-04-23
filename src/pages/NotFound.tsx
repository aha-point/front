interface INotFoundProps {}

const NotFound = (props: INotFoundProps) => {
  //   const location = useLocation();
  //   const from = location.state?.from || '/';

  return (
    <div>
      <h2>404 Not Found</h2>
      <p>The requested URL was not found.</p>
      {/* <Navigate to={from} replace /> */}
    </div>
  );
};

export default NotFound;
