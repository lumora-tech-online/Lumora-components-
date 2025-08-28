import React, { useState, useEffect } from 'react';

const ComingSoon = ({
  className = "",
  title = "Coming Soon",
  heading = "We're Working on Something Amazing",
  description = "Our website is under construction. We'll be launching soon with exciting new features.",
  showTimer = false,
  launchDate,
  LinkComponent = 'a',
  notifyLink,
  onNotifyClick,
  bgImage,
}) => {
  const calculateTimeLeft = () => {
    if (!launchDate) return null;
    
    const difference = new Date(launchDate) - new Date();
    if (difference <= 0) return null;

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60)
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    if (!showTimer || !launchDate) return;

    const timer = setInterval(() => {
      const timeLeft = calculateTimeLeft();
      if (!timeLeft) {
        clearInterval(timer);
      } else {
        setTimeLeft(timeLeft);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [launchDate, showTimer]);

  const backgroundStyle = bgImage ? {
    backgroundImage: `url(${bgImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  } : {};

  return (
    <div 
      className={`min-h-screen flex flex-col items-center justify-center px-4 bg-gradient-to-b from-blue-50 to-white ${className}`}
      style={backgroundStyle}
    >
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-5xl md:text-7xl font-bold text-blue-600 mb-8">
          {title}
        </h1>
        
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-4">
          {heading}
        </h2>
        
        <p className="text-lg text-gray-600 mb-8">
          {description}
        </p>

        {showTimer && timeLeft && (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            {Object.entries(timeLeft).map(([unit, value]) => (
              <div key={unit} className="bg-white p-4 rounded-lg shadow-md">
                <div className="text-3xl font-bold text-blue-600">{value}</div>
                <div className="text-gray-600 capitalize">{unit}</div>
              </div>
            ))}
          </div>
        )}

        {(notifyLink || onNotifyClick) && (
          <div className="mt-8">
            <LinkComponent
              href={LinkComponent === 'a' ? notifyLink : undefined}
              to={LinkComponent !== 'a' ? notifyLink : undefined}
              onClick={onNotifyClick}
              className="px-8 py-4 bg-blue-600 text-white rounded-full text-lg font-semibold shadow-lg hover:bg-blue-700 transition-colors duration-300"
            >
              Notify Me When Ready
            </LinkComponent>
          </div>
        )}
      </div>
    </div>
  );
};

export default ComingSoon;