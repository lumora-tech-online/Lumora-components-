import { Info } from "lucide-react";

const InfoCard = ({
  icon: Icon = Info,
  iconSize = 28,
  iconColor = "text-blue-600",
  iconBgColor = "bg-blue-100",
  title = "About Our Website",
  highlightText = "MediCare Solutions",
  description = "We provide online consultations, booking systems, and reliable medical information to help you take charge of your health anytime, anywhere.",
  buttonText = "Learn More",
  onButtonClick,
  className = "",
  LinkComponent = 'button',
  linkProps = {},
}) => {
  return (
    <div className={`max-w-md mx-auto bg-white rounded-2xl shadow-lg p-6 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 ${className}`}>
      <div className="flex items-center mb-4">
        <div className={`p-3 ${iconBgColor} rounded-full`}>
          <Icon className={iconColor} size={iconSize} />
        </div>
        <h2 className="ml-3 text-2xl font-bold text-gray-800">
          {title}
        </h2>
      </div>

      <p className="text-gray-600 leading-relaxed">
        Welcome to <span className="font-semibold text-blue-700">{highlightText}</span>, 
        your trusted platform for seamless healthcare services. {description}
      </p>

      <div className="mt-6">
        <LinkComponent
          {...(LinkComponent === 'button' ? { onClick: onButtonClick } : linkProps)}
          className="px-5 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition"
        >
          {buttonText}
        </LinkComponent>
      </div>
    </div>
  );
};

export default InfoCard;
