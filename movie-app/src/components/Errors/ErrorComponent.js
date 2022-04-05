import React from 'react';

const ErrorComponent = () => {
    return (
        <div style={{
            display: "flex",
            minHeight: "100vh",
            justifyContent: "center",
            alignItems: "center"
        }}
        >
            <h2 style={{ color: "red", fontSize: "2rem" }}>
                Something went wrong 😭 Try again
            </h2>
        </div>
    );
};

export default ErrorComponent