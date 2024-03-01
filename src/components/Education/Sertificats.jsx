import dataEducation from "../../data/education.json"

export const Education = () => {

  const outItemEducation = ({dataBegin, dataEnd, title, describe}, index) => {
    return (
      <li key={index+title}>
        <p>{dataBegin} - {dataEnd}</p>
        <h3>{title}</h3>
        <p>{describe}</p>
        <hr />
      </li>
    )
  }

  return (
    <>
      {dataEducation && (
        <ul>
          {dataEducation.map((item, index) => 
            <outItemEducation item={item} index={index}/>)}
        </ul>
      )}
    </>
  )
}