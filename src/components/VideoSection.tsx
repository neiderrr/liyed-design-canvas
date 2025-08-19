const VideoSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="section-title">Información y Cuidado</h2>
          <p className="text-lg text-foreground max-w-2xl mx-auto">
            Aprende a cuidar tus camisetas DTF, consejos para aumentar su duración y mantener la calidad de impresión.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-center mb-6 text-primary">
              Consejos para el Cuidado de DTF
            </h3>
            
            <div className="relative w-full max-w-md mx-auto aspect-[9/16] rounded-lg overflow-hidden shadow-lg">
              <iframe
                src="https://www.youtube.com/embed/Ax31cqek9UY"
                title="Consejos para el Cuidado de DTF"
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
            
            <p className="text-center mt-4 text-foreground">
              Descubre cómo mantener tus camisetas DTF como nuevas por más tiempo.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;