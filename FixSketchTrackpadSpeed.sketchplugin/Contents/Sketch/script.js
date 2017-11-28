function onStart(context) {
  const scriptPath = context.scriptPath;
  const frameworkName = @"FixSketchTrackpadSpeed";
  const directory = [scriptPath stringByDeletingLastPathComponent];
  
  const loaded = [[Mocha sharedRuntime] loadFrameworkWithName:frameworkName inDirectory:directory];
  if (!loaded) {
    log("FixSketchTrackpadSpeed loadFrameworkWithName failed");
    return;
  }
  
  const fix = NSClassFromString(@"FixSketchTrackpadSpeed");
  if (!fix) {
    log("FixSketchTrackpadSpeed NSClassFromString failed");
    return;
  }
  
  if (![fix fix]) {
    log("FixSketchTrackpadSpeed fix failed");
    return;
  }
  
  log("FixSketchTrackpadSpeed fixed");
}
