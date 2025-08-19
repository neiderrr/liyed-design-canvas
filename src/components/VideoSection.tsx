const VideoSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="section-title">Información y Cuidado</h2>
          <p className="text-lg text-foreground max-w-2xl mx-auto">
            Aprende a cuidar tu reloj de lujo, darle mantenimiento adecuado y conocer su historia.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-center mb-6 text-primary">
              El Arte y el Sonido de la Relojería
            </h3>
            
            <div className="relative w-full max-w-md mx-auto aspect-[9/16] rounded-lg overflow-hidden shadow-lg">
              <iframe
                src="https://www.youtube.com/embed/Ax31cqek9UY"
                title="El Arte y el Sonido de la Relojería"
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
            
            <p className="text-center mt-4 text-foreground">
              Escucha el tictac preciso y calmante de un mecanismo suizo.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;