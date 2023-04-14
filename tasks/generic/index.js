import m from 'mithril';

import variables from './variables';

// Tasks
import ConfigureMultiSigGroupTask from './configure-multi-sig-group/configure-multi-sig-group';
import CreateYourAIDTask from './create-your-aid/create-your-aid';
import CreatePasscodeTask from './create-your-passcode/create-your-passcode';
import CredentialIssuanceTask from './credential-issuance/credential-issuance';
import CredentialRevocationTask from './credential-revocation/credential-revocation';
import EnterPasscodeTask from './enter-passcode/enter-passcode';
import IntroToYourRoleTask from './intro-to-your-role/intro-to-your-role';
import JoinMultiSigGroupTask from './join-multi-sig-group/join-multi-sig-group';
import InitiateManualKeyRotationTask from '../generic/initiate-manual-key-rotation/initiate-manual-key-rotation';
import JoinManualKeyRotationTask from '../generic/join-manual-key-rotation/join-manual-key-rotation';
import VideoCallTask from './video-call/video-call';
import ViewMultiSigEventLogsTask from './view-multi-sig-event-logs/view-multi-sig-event-logs';
import {DefaultMapTask} from "../../src/app/services/tasks";

const tasks = {
  'create-passcode': [
    new CreatePasscodeTask({ label: 'Create Your Passcode' }),
    new EnterPasscodeTask({ label: 'Enter Your Passcode' }),
  ],
  'create-identifier': [
    new IntroToYourRoleTask({ label: 'Intro to Your Role', variables: variables.introToYourRole }),
    new CreateYourAIDTask({ label: 'Incept Local Single-Sig AID', variables: variables.createYourAid }),
  ],
  'create-multisig': [
    new VideoCallTask({
      initiate: true,
      label: 'Lead Multi-Sig AID Inception',
      next: new ConfigureMultiSigGroupTask({label: 'Configure Multi-Sig Group'}),
    }),
    new VideoCallTask({ initiate: false, label: 'Join Multi-Sig AID Inception' }),
  ],
  'join-multisig': [new JoinMultiSigGroupTask('Join Multi-Sig Group')],
  'login': [new EnterPasscodeTask({ id: 'enter-passcode', label: 'Enter Your Passcode' })],
  'main': [
    new CredentialIssuanceTask({ label: 'Credential Issuance' }),
    new CredentialRevocationTask({ label: 'Credential Revocation' }),
    new InitiateManualKeyRotationTask({ label: 'Initiate Manual Key Rotation' }),
    new JoinManualKeyRotationTask({ label: 'Join Manual Key Rotation' }),
    new ViewMultiSigEventLogsTask({ label: 'View Multi-Sig Event Logs' }),
  ],
};

module.exports = new DefaultMapTask(tasks);
