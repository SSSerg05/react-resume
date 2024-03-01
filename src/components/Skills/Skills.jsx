

export const Skills = (title, listSkills) => {
  
  return (
    <>
      <h3>{title}</h3>
      <ul>
        { listSkills.map((item, index) => {
            <li className="itemSkills" key={index}>item</li>
          }
        )}
      </ul>
    </>
  )
}