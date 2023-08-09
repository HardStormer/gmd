const LoadSpinner = () => {
    return(
        <div className="alert alert-info d-flex align-items-center">
            <strong>Загрузка...</strong>
            <div className="spinner-border ms-auto" role="status" aria-hidden="true"></div>
        </div>
    )
}

export default LoadSpinner

