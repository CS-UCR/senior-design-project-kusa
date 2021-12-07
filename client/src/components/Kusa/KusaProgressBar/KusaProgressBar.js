const KusaProgressBar = (props) => {
    const { completed } = props;
    const containerStyles = {
      height: 20,
      width: '100%',
      backgroundColor: "rgba(0,0,0,0.25)",
      borderRadius: 50,
      boxShadow: 1,
      margin: 10,
    }
  
    const fillerStyles = {
      height: '100%',
      width: `${completed}%`,
      background: "linear-gradient(to right, rgb(163,190,140), rgb(163,190,140,.55))",
      borderRadius: 'inherit',
      transition: 'width 1s ease-in-out',
      textAlign: 'right'
    }
  
    const labelStyles = {
      padding: 5,
      color: '#F9FBE8',
      fontWeight: '600'
    }
  
    return (
      <div style={containerStyles}>
        <div style={fillerStyles}>
          <span style={labelStyles}>{`${completed}%`}</span>
        </div>
      </div>
    );
  };
  
  export default KusaProgressBar;