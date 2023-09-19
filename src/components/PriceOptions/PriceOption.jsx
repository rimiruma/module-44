

const PriceOption = () => {

    {
        "price_options": [
          {
            "id": "1",
            "name": "Basic Membership",
            "price": 29.99,
            "features": [
              "Access to cardio and weightlifting area",
              "Unlimited group fitness classes",
              "Locker room access",
              "24/7 gym access",
              "Online workout tracking",
              "Nutritional guidance"
            ]
          },
          {
            "id": "2",
            "name": "Premium Membership",
            "price": 49.99,
            "features": [
              "All features of Basic Membership",
              "Access to sauna and steam room",
              "Personalized fitness assessment",
              "Monthly personal training session",
              "Free guest passes (2 per month)",
              "Discounts on gym merchandise"
            ]
          },
          {
            "id": "3",
            "name": "Family Membership",
            "price": 89.99,
            "features": [
              "All features of Premium Membership for up to 4 family members",
              "Discounts on additional family member enrollments",
              "Childcare services available",
              "Family fitness classes",
              "Access to exclusive family events",
              "Complimentary towel service"
            ]
          }
        ]
      }
      
    return (
        <div>
          <h2 className="text-5xl">Best Price in the town</h2>
          {
            PriceOption.map(option => <PriceOption key={option.id} option={option}></PriceOption>)
          }  
        </div>
    );
};

export default PriceOption;