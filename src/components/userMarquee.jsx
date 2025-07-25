import Image from "next/image"

export default function UserMarquee(){

    const userImages = [
    'amateur_award.svg',
    'apple_design_awards.svg',
    'apple_app_of_the_year.svg',
    'cb.svg',
    'da_award.svg',
    'expert_reviews.svg',
    'pcpro_app.svg',
    'photo_news_award.svg',
    'stuff_award.svg',
    'stuff_gadget_award.svg',
    'tipa.svg',
    'windows_developer_award.svg'
  ];

    return(
        <div className="w-full whitespace-nowrap overflow-hidden">
      <div className="flex flex-row marquee-content">
            {userImages.map((image, index) => (
            <Image key={index} src={`/assets/awards/${image}`} width={100} height={100}
                alt={image.replace('.svg', '')}
                className="award-image"/>
            ))}
            {userImages.map((image, index) => (
            <Image key={index} src={`/assets/awards/${image}`} width={100} height={100}
                alt={image.replace('.svg', '')}
                className="award-image"/>
            ))}
        </div>
        </div>
    )
}