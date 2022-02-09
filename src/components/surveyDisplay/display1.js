import React, {useState, useCallback} from 'react';
import MySurvey from '../surveyTypes/surveyTypeOne'

const SurveyOne = () => {
    const [showPage, setShowPage] = useState(true);
    
    const onCompletePage = useCallback((data) => {
        console.log(data);
        setShowPage(!showPage)
    }, [showPage])

    const setFinalPage = () => {
        return(
            <body>
                <h3>Obrigado por completar o questionário!</h3>
            </body>
        )
    }
    return (
        <div className = "App">
            {
            showPage?
            <MySurvey  showCompletedPage={data=>onCompletePage(data)} />:
            setFinalPage()
            }
        </div>
        
    )
}
export default SurveyOne