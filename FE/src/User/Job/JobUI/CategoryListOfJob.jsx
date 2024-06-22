import { useGetIndustry } from "../../../API/useGetIndustry"
import { LoadingPage } from "../../../UI/LoadingPage"
import { CategoryTag } from "./CategoryTag"

export const CategoryListOfJob = ({title, arrayIndustriesOfJob}) => {
    const {listIndustry, isLoading} = useGetIndustry()
    if(isLoading) return <LoadingPage/>
    return (
        <>
            <div className="row mb-3">
                <h5 className="col-lg-12" style={{borderLeft: "7px solid #17A2B8", paddingLeft: "10px", fontWeight: "700", marginBottom: "18px"}}>{title}</h5>
                {
                    arrayIndustriesOfJob && arrayIndustriesOfJob?.data ? arrayIndustriesOfJob?.data.map( (i, index) => 
                        listIndustry.data.map(industry => {
                                if(industry.industryId === i.industries_industryid){
                                    return <CategoryTag industry={industry} key={index}/>
                                }
                            }
                        )
                    )
                    : null
                }

            </div>
        </>
    )
}