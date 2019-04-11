import { FocusgroupeModule } from './focusgroupe.module';

describe('FocusgroupeModule', () => {
  let focusgroupeModule: FocusgroupeModule;

  beforeEach(() => {
    focusgroupeModule = new FocusgroupeModule();
  });

  it('should create an instance', () => {
    expect(focusgroupeModule).toBeTruthy();
  });
});
