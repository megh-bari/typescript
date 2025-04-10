// when u declare a abstarct to class then no need to create a object

abstract class TakePhoto {
  constructor(public cameraMode: string, public filter: string) {}

  abstract createStory(): void;
  getReelTime(): number {
    // complex calculation
    return 18;
  }
}

// const megha = new TakePhoto("test", "test") // cannot create a obj
class Insta extends TakePhoto {
    constructor(
      public cameraMode: string,
      public filter: string,
      public burstMode: number
    ) {
      super(cameraMode, filter);
    }
  
    createStory(): void {
      console.log("story created");
    }
  }
  
  const megha = new Insta("test", "test", 3); 
  