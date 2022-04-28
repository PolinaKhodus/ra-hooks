export default function Details({ info }) {  
  const { name, avatar, details} = info;

  if (!Object.keys(info).length) {
    return null;
  }

  return (
    <div className="user-details">
      <img src={avatar} alt="name" className="user-avatar"/>
      <div className="detail-field user-name">{name}</div>
      <div className="detail-field user-city">{`City: ${details.city}`}</div>
      <div className="detail-field user-company">{`Company: ${details.company}`}</div>
      <div className="detail-field user-position">{`Position: ${details.position}`}</div>
    </div>
  );
}
