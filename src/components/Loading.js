import "../styles/layout/loading.scss";

function Loading(props) {
    if (props.isLoading === true) {
        return <span className="loading" />;
    }
};

Loading.defaultProps = {
    isLoading: true,
};

export default Loading;