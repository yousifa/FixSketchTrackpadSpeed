//
//  FixSketchTrackpadSpeed.h
//  FixSketchTrackpadSpeed
//
//  Created by Pravdomil Toman on 28/11/2017.
//  Copyright © 2017 Pravdomil Toman. All rights reserved.
//

#import <Cocoa/Cocoa.h>

@interface FixSketchTrackpadSpeed : NSObject

@property(nonatomic) struct CGPoint scrollOrigin;

- (void)scrollWheelScroll:(id)arg1;
- (void)scrollToScrollOrigin:(struct CGPoint)arg1;

@end
