const NotFound = ({ 
  homeLink = "/",
  supportLink,
  className = "",
  title = "404",
  heading = "Page Not Found",
  description = "Sorry, the page you're looking for doesn't exist or has been moved.",
  LinkComponent = 'a',
  onHomeClick,
  onSupportClick
}) => {
  return (
    <div className={`flex flex-col items-center justify-center min-h-screen bg-gray-50 px-6 ${className}`}>
      <h1 className="text-9xl font-bold text-blue-600">{title}</h1>
      <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mt-4">
        {heading}
      </h2>
      <p className="text-gray-600 mt-2 text-center">
        {description}
      </p>

      <div className="flex space-x-4 mt-6">
        <LinkComponent
          href={LinkComponent === 'a' ? homeLink : undefined}
          to={LinkComponent !== 'a' ? homeLink : undefined}
          onClick={onHomeClick}
          className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition"
        >
          Go Home
        </LinkComponent>
        {supportLink && (
          <LinkComponent
            href={LinkComponent === 'a' ? supportLink : undefined}
            to={LinkComponent !== 'a' ? supportLink : undefined}
            onClick={onSupportClick}
            className="px-6 py-3 bg-gray-200 text-gray-800 rounded-lg shadow hover:bg-gray-300 transition"
          >
            Contact Support
          </LinkComponent>
        )}
      </div>
    </div>
  );
};

export default NotFound;
