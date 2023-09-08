export default function THead({ semesterNames }: { semesterNames: string[] }) {
  return (
    <thead>
      <tr>
        {semesterNames.map((semester, index) => (
          <th key={index}>{semester}</th>
        ))}
      </tr>
    </thead>
  )
}
