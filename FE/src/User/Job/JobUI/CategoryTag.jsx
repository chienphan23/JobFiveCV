import { Link } from "react-router-dom"

export const CategoryTag = ({industry}) => {
    return(
        <>
            <div className="bg-info mb-3" style={{padding: "3px 6px", borderRadius: "8px",margin: "0 8px"}}>
                    <Link to={`/search-page?provinceParam=&minSalaryParam=0&maxSalaryParam=0&industryParam=${industry.industryId}&experienceParam=0&searchKeyParam=&typeParam=0`} ><p className="text-white">{industry.industryName}</p></Link>
            </div>
        </>
    )
}