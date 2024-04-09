const Portfolio = ()=>{

    return(

        <div className="w3-padding-64 w3-content" id="photos">
  <h2 className="w3-text-light-grey">My Photos</h2>
  <hr style={{ width: 200 }} className="w3-opacity" />
  {/* Grid for photos */}
  <div className="w3-row-padding" style={{ margin: "0 -16px" }}>
    <div className="w3-half">
      <img src="https://www.w3schools.com/w3images/wedding.jpg" style={{ width: "100%" }} alt="myblogimage" />
      <img src="https://www.w3schools.com/w3images/rocks.jpg" style={{ width: "100%" }} alt="myblogimage" />
      <img src="https://www.w3schools.com/w3images/sailboat.jpg" style={{ width: "100%" }} alt="myblogimage" />
    </div>
    <div className="w3-half">
      <img src="https://www.w3schools.com/w3images/underwater.jpg" style={{ width: "100%" }} alt="myblogimage" />
      <img src="https://www.w3schools.com/w3images/chef.jpg" style={{ width: "100%" }} alt="myblogimage" />
      <img src="https://www.w3schools.com/w3images/wedding.jpg" style={{ width: "100%" }} alt="myblogimage" />
      <img src="https://www.w3schools.com/w3images/p6.jpg" style={{ width: "100%" }} alt="myblogimage" />
    </div>
    {/* End photo grid */}
  </div>
  {/* End Portfolio Section */}
</div>

    )
}

export default Portfolio