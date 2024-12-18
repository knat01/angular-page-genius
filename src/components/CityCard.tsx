interface CityCardProps {
  name: string;
  image: string;
  properties: number;
}

export const CityCard = ({ name, image, properties }: CityCardProps) => {
  return (
    <div className="city-card group cursor-pointer">
      <img src={image} alt={name} className="city-image" />
      <div className="city-overlay">
        <div className="text-center text-white">
          <h3 className="text-xl font-bold">{name}</h3>
          <p className="text-sm">{properties} Properties</p>
        </div>
      </div>
    </div>
  );
};