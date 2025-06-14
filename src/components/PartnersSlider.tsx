
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";

const PartnersSlider = () => {
  const partners = [
    {
      id: 1,
      name: "Microsoft Bulgaria",
      logo: "/lovable-uploads/d1cb6ba8-a5b8-4971-a54d-ffa39ade484f.png",
      description: "Global technology leader and strategic innovation partner",
      category: "Technology"
    },
    {
      id: 2,
      name: "Telerik Academy",
      logo: "/lovable-uploads/f030017c-3b21-4931-a236-77cab2f47aef.png",
      description: "Premier software education and talent development partner",
      category: "Education"
    },
    {
      id: 3,
      name: "Sofia Tech Park",
      logo: "/lovable-uploads/8d65834e-7077-4171-8395-2d2dc55fc632.png",
      description: "Leading innovation hub fostering tech entrepreneurship",
      category: "Innovation Hub"
    },
    {
      id: 4,
      name: "Bulgarian-American Chamber",
      logo: "/lovable-uploads/dcbe10b3-93a8-43c9-a2d8-a936a90e0bf6.png",
      description: "Promoting bilateral trade and business opportunities",
      category: "Trade Organization"
    },
    {
      id: 5,
      name: "Endeavor Bulgaria",
      logo: "/lovable-uploads/f859debb-46e9-47a6-8caa-36391fff2d87.png",
      description: "Supporting high-impact entrepreneurs and scale-ups",
      category: "Entrepreneurship"
    },
    {
      id: 6,
      name: "VMware Bulgaria",
      logo: "/lovable-uploads/609c968f-d22b-421b-85af-4a464f96c2e3.png",
      description: "Cloud infrastructure and digital workspace solutions",
      category: "Technology"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-slate-50 via-white to-blue-50/30 border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Our Strategic Partners</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-800 to-red-600 mx-auto mb-6 rounded-full"></div>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Building strong partnerships with leading organizations to strengthen US-Bulgaria business relations and create meaningful opportunities for our community
          </p>
        </div>
        
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full relative"
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {partners.map((partner) => (
              <CarouselItem key={partner.id} className="pl-2 md:pl-4 basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4">
                <Link to={`/partner/${partner.id}`}>
                  <Card className="border-slate-200 hover:shadow-xl hover:border-blue-300 transition-all duration-300 bg-white group cursor-pointer transform hover:-translate-y-1">
                    <CardContent className="flex flex-col items-center justify-center p-8 h-40">
                      <div className="w-20 h-20 mb-4 rounded-xl bg-gradient-to-br from-slate-50 to-slate-100 flex items-center justify-center shadow-sm group-hover:shadow-md transition-shadow duration-300">
                        <img 
                          src={partner.logo} 
                          alt={`${partner.name} Logo`}
                          className="w-12 h-12 object-contain filter group-hover:scale-110 transition-transform duration-300"
                        />
                      </div>
                      <h3 className="font-semibold text-slate-900 text-sm text-center mb-1 group-hover:text-blue-800 transition-colors duration-300">
                        {partner.name}
                      </h3>
                      <p className="text-xs text-slate-500 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        {partner.category}
                      </p>
                    </CardContent>
                  </Card>
                </Link>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-2 bg-white hover:bg-slate-50 border-slate-300 shadow-lg" />
          <CarouselNext className="right-2 bg-white hover:bg-slate-50 border-slate-300 shadow-lg" />
        </Carousel>
      </div>
    </section>
  );
};

export default PartnersSlider;
