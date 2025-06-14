
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";

const PartnersSlider = () => {
  const partners = [
    {
      id: 1,
      name: "TechCorp",
      logo: "/lovable-uploads/d1cb6ba8-a5b8-4971-a54d-ffa39ade484f.png",
      description: "Leading technology solutions provider"
    },
    {
      id: 2,
      name: "Innovation Labs",
      logo: "/lovable-uploads/d1cb6ba8-a5b8-4971-a54d-ffa39ade484f.png",
      description: "Cutting-edge research and development"
    },
    {
      id: 3,
      name: "Global Ventures",
      logo: "/lovable-uploads/d1cb6ba8-a5b8-4971-a54d-ffa39ade484f.png",
      description: "International business expansion"
    },
    {
      id: 4,
      name: "StartupHub",
      logo: "/lovable-uploads/d1cb6ba8-a5b8-4971-a54d-ffa39ade484f.png",
      description: "Entrepreneurship and innovation support"
    },
    {
      id: 5,
      name: "FinTech Solutions",
      logo: "/lovable-uploads/d1cb6ba8-a5b8-4971-a54d-ffa39ade484f.png",
      description: "Financial technology innovations"
    },
    {
      id: 6,
      name: "Digital Partners",
      logo: "/lovable-uploads/d1cb6ba8-a5b8-4971-a54d-ffa39ade484f.png",
      description: "Digital transformation experts"
    }
  ];

  return (
    <section className="py-12 bg-gradient-to-r from-slate-50 to-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-2">Our Trusted Partners</h2>
          <p className="text-slate-600">Collaborating with leading organizations to strengthen US-Bulgaria business ties</p>
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
                <Card className="border-slate-200 hover:shadow-lg transition-shadow duration-300 bg-white">
                  <CardContent className="flex flex-col items-center justify-center p-6 h-32">
                    <div className="w-16 h-16 mb-3 rounded-full bg-slate-100 flex items-center justify-center">
                      <img 
                        src={partner.logo} 
                        alt={`${partner.name} Logo`}
                        className="w-10 h-10 object-contain"
                      />
                    </div>
                    <h3 className="font-semibold text-slate-900 text-sm text-center">{partner.name}</h3>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-2" />
          <CarouselNext className="right-2" />
        </Carousel>
      </div>
    </section>
  );
};

export default PartnersSlider;
