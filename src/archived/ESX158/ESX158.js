// NEST IN HERE FOR DEPLOY
const ESX158 = () => {
  const generateHtml = () => {
    const formatHtml = (randomId, questionTitle, question, answer) => {
      if (typeof questionTitle == "undefined") {
        return "";
      }
      let randomName = ["Emma", "Eddy", "Olivia", "Kevin", "Kimberly"];
      randomName = randomName[Math.floor(Math.random() * randomName.length)];
      let gender =
        randomName.search(/Emma|Olivia|Kimberly/) > -1 ? "Female" : "Male";

      return `<div id="BVQAQuestionAndAnswers${randomId}" class="BVQAQuestionAndAnswers BVQAQuestionAndAnswersProduct BVQAQuestionAndAnswersNative BVQAQuestionAndAnswersQuestionWithStaffAnswer"> <div id="BVQAQuestionHeader${randomId}" class="BVQAQuestionHeader BVQAQuestionHeaderClosed" onclick=" $bv('#BVQAQuestionMain${randomId}').toggle(); $bv('#BVQAQuestionHeader${randomId}').toggleClass('BVQAQuestionHeaderClosed').toggleClass('BVQAQuestionHeaderOpen'); if ($bv('#BVQAQuestionMain${randomId}').is(':visible')) { BVAnalyticsTracker.fireActionEvent(this, 'BV_TrackingTag_Question_questionExpansion',{'questionIds':['${randomId}'],'answerIds':['1595141']}); } bvqaUpdateExpandCollapseToolbarLabelValue('${randomId}');"> <div class="BVQAQuestionHeaderBadgeIcons"> <div class="BVQAQuestionHeaderBadgeIconContainer"> <div id="BVQAQuestionHeaderBadgeIcon${randomId}QuestionWithStaffAnswerID" class="BVQAQuestionHeaderBadgeIcon BVQAQuestionHeaderBadgeIconQuestionWithStaffAnswer" onmouseover="$bv('#BVQAQuestionHeaderBadgeIconHint${randomId}QuestionWithStaffAnswerID').removeClass('BVQAHidden'); BVAnalyticsTracker.fireActionEvent(this);" onmouseout="$bv('#BVQAQuestionHeaderBadgeIconHint${randomId}QuestionWithStaffAnswerID').addClass('BVQAHidden');"> </div> <div id="BVQAQuestionHeaderBadgeIconHint${randomId}QuestionWithStaffAnswerID" class="BVQAHidden BVQAQuestionHeaderBadgeIconHint">Has staff answer</div> </div> </div> <div class="BVQAQuestionHeaderBullet">&nbsp;</div> <div class="BVQAQuestionAnswersCount"><span class="BVQACount BVQANonZeroCount"><span class="BVQANumber">1</span> answer</span></div> <div class="BVQAQuestionSummary" role="heading" aria-level="3"> <a href="javascript:void(0);" role="button" aria-expanded="false">${questionTitle}</a> </div> </div> <div id="BVQAQuestionMain${randomId}" class="BVQAQuestionMain" style="display: none;"> <div id="BVQAQuestion${randomId}" class="BVQAContent BVQAQuestion"> <div class="BVQAContentText BVQAQuestionDetails"> <div class="BVQAContentLabel BVQAQuestionLabel"></div>${question} </div> <div class="BVQAQuestionTagsSection"> <div class="BVQATagsContainer"></div> </div> <div class="BVQAContextDataContainer BVQAQuestionContextDataContainer"> <div class="BVQAContextDataValueContainer BVQAContextDataValueContainerAge BVContextDataAge25to34"><span class="BVQALabel BVQAContextDataValuePrefix BVQAContextDataValueAgePrefix">Age:&nbsp;</span><span class="BVQAValue BVQAContextDataValue BVQAContextDataValueAge">25-34</span><span class="BVQALabel BVQAContextDataValueSuffix BVQAContextDataValueAgeSuffix"></span></div> <div class="BVQAContextDataValueContainer BVQAContextDataValueContainerGender BVContextDataGender${gender}"> <span class="BVQALabel BVQAContextDataValuePrefix BVQAContextDataValueGenderPrefix">Gender:&nbsp;</span><span class="BVQAValue BVQAContextDataValue BVQAContextDataValueGender">${gender}</span><span class="BVQALabel BVQAContextDataValueSuffix BVQAContextDataValueGenderSuffix"></span></div> <div class="BVQAContextDataValueContainer BVQAContextDataValueContainerHomeStyle BVContextDataHomeStyleLoftUrban"> <span class="BVQALabel BVQAContextDataValuePrefix BVQAContextDataValueHomeStylePrefix">Home Style:&nbsp;</span><span class="BVQAValue BVQAContextDataValue BVQAContextDataValueHomeStyle">Loft/Urban</span><span class="BVQALabel BVQAContextDataValueSuffix BVQAContextDataValueHomeStyleSuffix"></span></div> </div> <div class="BVQAContentData BVQAQuestionData"> <div class="BVQAElapsedTime">1 day ago</div> <div class="BVQASignature"><span class="BVQAAvatar"><a onmouseover=" bvProfileSnapshot.showHiddenPopinAfterDelay('BVDI_PSPopin_oql5w0wxkjghi8f0zxgakhz4l_ID', 'https://livingspaces.ugc.bazaarvoice.com/answers/3534-en_us/3jeu5webls5hyi33j188ucoot/profilesnapshot.djs?format=embeddedhtml', 'ProfileSnapshotFrame' ,500, 500 ) &amp;&amp; BVAnalyticsTracker.fireActionEvent(this); " onmouseout=" bvProfileSnapshot.hideOpenPopinAfterDelay(1000 ,250 ); " onclick="var popupWin = window.open(this.href, null, 'resizable=1,status=1,scrollbars=1,width=800,height=600,top=0'); popupWin.focus(); event.preventDefault?event.preventDefault():event.returnValue = false;" data-bvtrack="eName:ProfileLink" href="https://livingspaces.ugc.bazaarvoice.com/profiles/3534-en_us/3jeu5webls5hyi33j188ucoot/profile.htm" class="BVQALink" name="BV_TrackingTag_Question_Display_ReadAllQA_${randomName}"><span class="BVQALinkSpan"><img src="https://livingspaces.ugc.bazaarvoice.com/answers/3534-en_us/static/noAvatar.gif" alt="Customer Avatar" title="Customer Avatar"></span></a></span> <div class="BVQAWrittenBy">by </div> <div class="BVQANickname"><a onmouseover=" bvProfileSnapshot.showHiddenPopinAfterDelay('BVDI_PSPopin_oql5w0wxkjghi8f0zxgakhz4l_ID', 'https://livingspaces.ugc.bazaarvoice.com/answers/3534-en_us/3jeu5webls5hyi33j188ucoot/profilesnapshot.djs?format=embeddedhtml', 'ProfileSnapshotFrame' ,500, 500 ) &amp;&amp; BVAnalyticsTracker.fireActionEvent(this); " onmouseout=" bvProfileSnapshot.hideOpenPopinAfterDelay(1000 ,250 ); " onclick="var popupWin = window.open(this.href, null, 'resizable=1,status=1,scrollbars=1,width=800,height=600,top=0'); popupWin.focus(); event.preventDefault?event.preventDefault():event.returnValue = false;" data-bvtrack="eName:ProfileLink" href="https://livingspaces.ugc.bazaarvoice.com/profiles/3534-en_us/3jeu5webls5hyi33j188ucoot/profile.htm" title="Read all my Q&amp;A" class="BVQANickname" name="BV_TrackingTag_Question_Display_ReadAllQA_${randomName}">${randomName}</a></div> <div class="BVQALocation">California</div><a onmouseover=" bvProfileSnapshot.showHiddenPopinAfterDelay('BVDI_PSPopin_oql5w0wxkjghi8f0zxgakhz4l_ID', 'https://livingspaces.ugc.bazaarvoice.com/answers/3534-en_us/3jeu5webls5hyi33j188ucoot/profilesnapshot.djs?format=embeddedhtml', 'ProfileSnapshotFrame' ,500, 500 ) &amp;&amp; BVAnalyticsTracker.fireActionEvent(this); " onmouseout=" bvProfileSnapshot.hideOpenPopinAfterDelay(1000 ,250 ); " onclick="var popupWin = window.open(this.href, null, 'resizable=1,status=1,scrollbars=1,width=800,height=600,top=0'); popupWin.focus(); event.preventDefault?event.preventDefault():event.returnValue = false;" data-bvtrack="eName:ProfileLink" href="https://livingspaces.ugc.bazaarvoice.com/profiles/3534-en_us/3jeu5webls5hyi33j188ucoot/profile.htm" title="Read all my Q&amp;A" class="BVQAUserProfile" name="BV_TrackingTag_Question_Display_ReadAllQA_${randomName}"> <img src="https://livingspaces.ugc.bazaarvoice.com/answers/3534-en_us/static/moreQuestionsAndAnswers.gif" alt="Read all my Q&amp;A"> </a> <div class="BVDI_PSSpacer">&nbsp;</div> <div class="BVDI_PS BVDI_PSPopin BVDIHidden BVDI_PSNotLoaded BVQA_PSPopin BVBrowserWebkit" id="BVDI_PSMetaData_oql5w0wxkjghi8f0zxgakhz4l_ID" onmouseover=" bvProfileSnapshot.showHiddenPopinAfterDelay('BVDI_PSPopin_oql5w0wxkjghi8f0zxgakhz4l_ID', 'https://livingspaces.ugc.bazaarvoice.com/answers/3534-en_us/3jeu5webls5hyi33j188ucoot/profilesnapshot.djs?format=embeddedhtml', 'ProfileSnapshotFrame' ,500, 500 ) &amp;&amp; BVAnalyticsTracker.fireActionEvent(this); " onmouseout=" bvProfileSnapshot.hideOpenPopinAfterDelay(1000 ,250 ); "> <div class="BVDI_PSInside"> <div class="BVDI_PSSnapshotContainer BVQA_PS_3jeu5webls5hyi33j188ucoot_Container"> <div class="BVDI_PSSnapshotNotLoaded" style="display: none">&nbsp;</div> <div class="BVDI_PSSnapshotLoading"><img src="https://livingspaces.ugc.bazaarvoice.com/answers/3534-en_us/static/profileSnapshotLoading.gif" alt="Please wait while more information about ${randomName} is loaded." title="Please wait while more information about ${randomName} is loaded."></div> <div class="BVDI_PSSnapshotTimeoutError BVDIHidden">Additional information about ${randomName} could not be loaded. </div> </div> </div> </div> </div><div class="BVDI_FV"> <div class="BVDI_FVVoting BVDI_FVVotingHelpfulness"> <div class="BVDI_FVSum BVDI_FVSumHelpfulness"><span class="BVDI_FVZero BVDI_FVLevel1"><span class="BVDIValue BVDINumber">0</span><span class="BVDISuffix">points</span></span> </div> <div class="BVDI_FVCounts BVDI_FVCountsHelpfulness"><span class="BVDI_FVPositive BVDI_FVLevel1"><span class="BVDIValue BVDINumber">0</span><span class="BVDISuffix">out of</span></span> <span class="BVDI_FVTotal BVDI_FVLevel1"><span class="BVDIValue BVDINumber">0</span><span class="BVDISuffix">found this question helpful.</span></span></div> <div class="BVDI_FVVotes BVDI_FVVotesHelpfulness"><span class="BVDIPrefix">Was this helpful?</span><span class="BVDI_FVVote BVDI_FVPositive BVDI_FVLevel1"><a data-bvjsref="https://livingspaces.ugc.bazaarvoice.com/answers/submit/3534-en_us/product/223508/question/${randomId}/positive.djs?authsourcetype=__AUTHTYPE__&amp;format=embeddedhtml&amp;innerreturn=https%3A%2F%2Flivingspaces.ugc.bazaarvoice.com%2Fanswers%2F3534-en_us%2Fproduct%2F223508%2Fquestions.djs%3Fexpandquestion%3D${randomId}%26format%3Dembeddedhtml%26scrolltotop%3Dtrue&amp;return=https%3A%2F%2Fwww.livingspaces.com%2Fpdp-turdur-sofa-223508&amp;sessionparams=__BVSESSIONPARAMS__&amp;submissionparams=__BVSUBMISSIONPARAMETERS__&amp;submissionurl=&amp;user=__USERID__" data-bvcfg="755200077" href="javascript://" title="" class="BVDILink BVDIValue" name="BV_TrackingTag_Question_Display_AddPositiveFeedback_${randomId}" role="button" tabindex="0" aria-pressed="false"><span class="BVDILinkSpan"><span class="screen-reader">Was this helpful?</span><span class="BVDILabel">Yes</span><span class="BVDINumber">0</span></span></a></span><span class="BVDI_FVVote BVDI_FVNegative BVDI_FVLevel1"><a data-bvjsref="https://livingspaces.ugc.bazaarvoice.com/answers/submit/3534-en_us/product/223508/question/${randomId}/negative.djs?authsourcetype=__AUTHTYPE__&amp;format=embeddedhtml&amp;innerreturn=https%3A%2F%2Flivingspaces.ugc.bazaarvoice.com%2Fanswers%2F3534-en_us%2Fproduct%2F223508%2Fquestions.djs%3Fexpandquestion%3D${randomId}%26format%3Dembeddedhtml%26scrolltotop%3Dtrue&amp;return=https%3A%2F%2Fwww.livingspaces.com%2Fpdp-turdur-sofa-223508&amp;sessionparams=__BVSESSIONPARAMS__&amp;submissionparams=__BVSUBMISSIONPARAMETERS__&amp;submissionurl=&amp;user=__USERID__" data-bvcfg="755200077" href="javascript://" title="" class="BVDILink BVDIValue" name="BV_TrackingTag_Question_Display_AddNegativeFeedback_${randomId}" role="button" tabindex="0" aria-pressed="false"><span class="BVDILinkSpan"><span class="screen-reader">Was this helpful?</span><span class="BVDILabel">No</span><span class="BVDINumber">0</span></span></a></span><span class="BVDI_FVUndo" style="display: none;">https://livingspaces.ugc.bazaarvoice.com/answers/submit/3534-en_us/product/223508/question/${randomId}/undohelpfulness.djs?authsourcetype=__AUTHTYPE__&amp;format=embeddedhtml&amp;innerreturn=https%3A%2F%2Flivingspaces.ugc.bazaarvoice.com%2Fanswers%2F3534-en_us%2Fproduct%2F223508%2Fquestions.djs%3Fexpandquestion%3D${randomId}%26format%3Dembeddedhtml%26scrolltotop%3Dtrue&amp;return=https%3A%2F%2Fwww.livingspaces.com%2Fpdp-turdur-sofa-223508&amp;sessionparams=__BVSESSIONPARAMS__&amp;submissionparams=__BVSUBMISSIONPARAMETERS__&amp;submissionurl=&amp;user=__USERID__</span> </div> </div> <div class="BVDI_FVReportLink BVDI_FVReportLinkInappropriate"><a data-bvjsref="https://livingspaces.ugc.bazaarvoice.com/answers/submit/3534-en_us/product/223508/question/${randomId}/inappropriate.djs?authsourcetype=__AUTHTYPE__&amp;format=embeddedhtml&amp;innerreturn=https%3A%2F%2Flivingspaces.ugc.bazaarvoice.com%2Fanswers%2F3534-en_us%2Fproduct%2F223508%2Fquestions.djs%3Fexpandquestion%3D${randomId}%26format%3Dembeddedhtml&amp;return=https%3A%2F%2Fwww.livingspaces.com%2Fpdp-turdur-sofa-223508&amp;sessionparams=__BVSESSIONPARAMS__&amp;submissionparams=__BVSUBMISSIONPARAMETERS__&amp;submissionurl=&amp;user=__USERID__" data-bvcfg="755200077" href="javascript://" title="" class="BVDILink " name="BV_TrackingTag_Question_Display_Inappropriate_${randomId}" role="button" tabindex="0" aria-pressed="false"><span class="BVDILinkSpan">Report inappropriate content</span></a> </div> </div> <div class="BVQASpacer BVQAContentDataSpacer"></div> </div> </div> <div class="BVQAQuestionAnswerDivider"> <h2 class="BVQAQuestionAnswerDividerHeading"> Answers </h2> </div> <div id="BVQAQuestion${randomId}Answers" class="BVQAAnswers"> <div id="BVQAAnswer1595141" class="BVQAContent BVQAAnswer BVDI_BAContentStaff"> <div class="BVQAContentText BVQAAnswerText"> <div class="BVQAContentLabel BVQAAnswerLabel">Answer:&nbsp;</div>${answer} </div> <div class="BVQAContentData BVAnswerData"> <div class="BVQAElapsedTime">1 day ago</div> <div class="BVDI_BA BVDI_BAAnswer"> <div class="BVDIInside BVDI_BAInside"> <div class="BVDIBody BVDI_BABody"> <ul class="BVDI_BAList"> <li class="BVDI_BAItem BVDI_BAItemOdd BVDI_BAItemStaff"> <div id="BVDI_BAPopup_9wlvgi530iu1yw047oe6lmyu5_ID" class="BVDIPopup BVDI_BAPopup BVDI_BAPopupStaff" style="display: none;"> <div class="BVDIInside BVDI_BAInsidePopup"> <div class="BVDIBody BVDI_BAPopupBody"> <dl class="BVDI_BAList"> <dt class="BVDI_BAItem BVDI_BAItemOnly BVDI_BAItemStaff"> <a onclick="return false;" class="BVDILink BVDILinkDisabled" role="button" title="" tabindex="0" aria-pressed="false"> <span class="BVDILinkSpan">Staff</span></a></dt> <dd> <p>This contributor is a member of the Living Spaces product team.</p> </dd> </dl> </div> </div> </div> <a onclick="return false;" class="BVDILink BVDILinkDisabled" id="BVDI_BABadge_30yc120hthut3dl3vueimt98g_ID" onmouseover="bvTooltip.show(&quot;BVDI_BAPopup_9wlvgi530iu1yw047oe6lmyu5_ID&quot;, this.id, false, []);" onmouseout="bvTooltip.hide();" role="button" title="" tabindex="0" aria-pressed="false"> <span class="BVDILinkSpan">Staff</span></a> </li> </ul> </div> </div> </div> <div class="BVQASignature"><span class="BVQAAvatar"><a onmouseover=" bvProfileSnapshot.showHiddenPopinAfterDelay('BVDI_PSPopin_6i9q2c7z4zkmed22obezlwjol_ID', 'https://livingspaces.ugc.bazaarvoice.com/answers/3534-en_us/Staff_Answerer/profilesnapshot.djs?format=embeddedhtml', 'ProfileSnapshotFrame' ,500, 500 ) &amp;&amp; BVAnalyticsTracker.fireActionEvent(this); " onmouseout=" bvProfileSnapshot.hideOpenPopinAfterDelay(1000 ,250 ); " onclick="var popupWin = window.open(this.href, null, 'resizable=1,status=1,scrollbars=1,width=800,height=600,top=0'); popupWin.focus(); event.preventDefault?event.preventDefault():event.returnValue = false;" data-bvtrack="eName:ProfileLink" href="https://livingspaces.ugc.bazaarvoice.com/profiles/3534-en_us/Staff_Answerer/profile.htm" class="BVQALink" name="BV_TrackingTag_Answer_Display_ReadAllQA_LSProductTeam"><span class="BVQALinkSpan"><img src="https://livingspaces.ugc.bazaarvoice.com/answers/3534-en_us/static/noAvatar.gif" alt="Customer Avatar" title="Customer Avatar"></span></a></span> <div class="BVQAWrittenBy">by </div> <div class="BVQANickname"><a onmouseover=" bvProfileSnapshot.showHiddenPopinAfterDelay('BVDI_PSPopin_6i9q2c7z4zkmed22obezlwjol_ID', 'https://livingspaces.ugc.bazaarvoice.com/answers/3534-en_us/Staff_Answerer/profilesnapshot.djs?format=embeddedhtml', 'ProfileSnapshotFrame' ,500, 500 ) &amp;&amp; BVAnalyticsTracker.fireActionEvent(this); " onmouseout=" bvProfileSnapshot.hideOpenPopinAfterDelay(1000 ,250 ); " onclick="var popupWin = window.open(this.href, null, 'resizable=1,status=1,scrollbars=1,width=800,height=600,top=0'); popupWin.focus(); event.preventDefault?event.preventDefault():event.returnValue = false;" data-bvtrack="eName:ProfileLink" href="https://livingspaces.ugc.bazaarvoice.com/profiles/3534-en_us/Staff_Answerer/profile.htm" title="Read all my Q&amp;A" class="BVQANickname" name="BV_TrackingTag_Answer_Display_ReadAllQA_LSProductTeam">LSProductTeam</a></div><a onmouseover=" bvProfileSnapshot.showHiddenPopinAfterDelay('BVDI_PSPopin_6i9q2c7z4zkmed22obezlwjol_ID', 'https://livingspaces.ugc.bazaarvoice.com/answers/3534-en_us/Staff_Answerer/profilesnapshot.djs?format=embeddedhtml', 'ProfileSnapshotFrame' ,500, 500 ) &amp;&amp; BVAnalyticsTracker.fireActionEvent(this); " onmouseout=" bvProfileSnapshot.hideOpenPopinAfterDelay(1000 ,250 ); " onclick="var popupWin = window.open(this.href, null, 'resizable=1,status=1,scrollbars=1,width=800,height=600,top=0'); popupWin.focus(); event.preventDefault?event.preventDefault():event.returnValue = false;" data-bvtrack="eName:ProfileLink" href="https://livingspaces.ugc.bazaarvoice.com/profiles/3534-en_us/Staff_Answerer/profile.htm" title="Read all my Q&amp;A" class="BVQAUserProfile" name="BV_TrackingTag_Answer_Display_ReadAllQA_LSProductTeam"> <img src="https://livingspaces.ugc.bazaarvoice.com/answers/3534-en_us/static/moreQuestionsAndAnswers.gif" alt="Read all my Q&amp;A"> </a> <div class="BVDI_PSSpacer">&nbsp;</div> <div class="BVDI_PS BVDI_PSPopin BVDIHidden BVDI_PSNotLoaded BVQA_PSPopin BVBrowserWebkit" id="BVDI_PSMetaData_6i9q2c7z4zkmed22obezlwjol_ID" onmouseover=" bvProfileSnapshot.showHiddenPopinAfterDelay('BVDI_PSPopin_6i9q2c7z4zkmed22obezlwjol_ID', 'https://livingspaces.ugc.bazaarvoice.com/answers/3534-en_us/Staff_Answerer/profilesnapshot.djs?format=embeddedhtml', 'ProfileSnapshotFrame' ,500, 500 ) &amp;&amp; BVAnalyticsTracker.fireActionEvent(this); " onmouseout=" bvProfileSnapshot.hideOpenPopinAfterDelay(1000 ,250 ); "> <div class="BVDI_PSInside"> <div class="BVDI_PSSnapshotContainer BVQA_PS_Staff_Answerer_Container"> <div class="BVDI_PSSnapshotNotLoaded" style="display: none">&nbsp;</div> <div class="BVDI_PSSnapshotLoading"><img src="https://livingspaces.ugc.bazaarvoice.com/answers/3534-en_us/static/profileSnapshotLoading.gif" alt="Please wait while more information about LSProductTeam is loaded." title="Please wait while more information about LSProductTeam is loaded."> </div> <div class="BVDI_PSSnapshotTimeoutError BVDIHidden">Additional information about LSProductTeam could not be loaded. </div> </div> </div> </div> </div> <div class="BVDI_FV"> <div class="BVDI_FVVoting BVDI_FVVotingHelpfulness"> <div class="BVDI_FVSum BVDI_FVSumHelpfulness"><span class="BVDI_FVZero BVDI_FVLevel1"><span class="BVDIValue BVDINumber">0</span><span class="BVDISuffix">points</span></span></div> <div class="BVDI_FVCounts BVDI_FVCountsHelpfulness"><span class="BVDI_FVPositive BVDI_FVLevel1"><span class="BVDIValue BVDINumber">0</span><span class="BVDISuffix">out of</span></span> <span class="BVDI_FVTotal BVDI_FVLevel1"><span class="BVDIValue BVDINumber">0</span><span class="BVDISuffix">found this answer helpful.</span></span></div> <div class="BVDI_FVVotes BVDI_FVVotesHelpfulness"><span class="BVDIPrefix">Was this helpful?</span><span class="BVDI_FVVote BVDI_FVPositive BVDI_FVLevel1"><a data-bvjsref="https://livingspaces.ugc.bazaarvoice.com/answers/submit/3534-en_us/product/223508/answer/1595141/positive.djs?authsourcetype=__AUTHTYPE__&amp;format=embeddedhtml&amp;innerreturn=https%3A%2F%2Flivingspaces.ugc.bazaarvoice.com%2Fanswers%2F3534-en_us%2Fproduct%2F223508%2Fquestions.djs%3Fexpandanswer%3D1595141%26expandquestion%3D${randomId}%26format%3Dembeddedhtml%26scrolltotop%3Dtrue&amp;return=https%3A%2F%2Fwww.livingspaces.com%2Fpdp-turdur-sofa-223508&amp;sessionparams=__BVSESSIONPARAMS__&amp;submissionparams=__BVSUBMISSIONPARAMETERS__&amp;submissionurl=&amp;user=__USERID__" data-bvcfg="755200077" href="javascript://" title="" class="BVDILink BVDIValue" name="BV_TrackingTag_Answer_Display_AddPositiveFeedback_1595141" role="button" tabindex="0" aria-pressed="false"><span class="BVDILinkSpan"><span class="screen-reader">Was this helpful?</span><span class="BVDILabel">Yes</span><span class="BVDINumber">0</span></span></a></span><span class="BVDI_FVVote BVDI_FVNegative BVDI_FVLevel1"><a data-bvjsref="https://livingspaces.ugc.bazaarvoice.com/answers/submit/3534-en_us/product/223508/answer/1595141/negative.djs?authsourcetype=__AUTHTYPE__&amp;format=embeddedhtml&amp;innerreturn=https%3A%2F%2Flivingspaces.ugc.bazaarvoice.com%2Fanswers%2F3534-en_us%2Fproduct%2F223508%2Fquestions.djs%3Fexpandanswer%3D1595141%26expandquestion%3D${randomId}%26format%3Dembeddedhtml%26scrolltotop%3Dtrue&amp;return=https%3A%2F%2Fwww.livingspaces.com%2Fpdp-turdur-sofa-223508&amp;sessionparams=__BVSESSIONPARAMS__&amp;submissionparams=__BVSUBMISSIONPARAMETERS__&amp;submissionurl=&amp;user=__USERID__" data-bvcfg="755200077" href="javascript://" title="" class="BVDILink BVDIValue" name="BV_TrackingTag_Answer_Display_AddNegativeFeedback_1595141" role="button" tabindex="0" aria-pressed="false"><span class="BVDILinkSpan"><span class="screen-reader">Was this helpful?</span><span class="BVDILabel">No</span><span class="BVDINumber">0</span></span></a></span><span class="BVDI_FVUndo" style="display: none;">https://livingspaces.ugc.bazaarvoice.com/answers/submit/3534-en_us/product/223508/answer/1595141/undohelpfulness.djs?authsourcetype=__AUTHTYPE__&amp;format=embeddedhtml&amp;innerreturn=https%3A%2F%2Flivingspaces.ugc.bazaarvoice.com%2Fanswers%2F3534-en_us%2Fproduct%2F223508%2Fquestions.djs%3Fexpandanswer%3D1595141%26expandquestion%3D${randomId}%26format%3Dembeddedhtml%26scrolltotop%3Dtrue&amp;return=https%3A%2F%2Fwww.livingspaces.com%2Fpdp-turdur-sofa-223508&amp;sessionparams=__BVSESSIONPARAMS__&amp;submissionparams=__BVSUBMISSIONPARAMETERS__&amp;submissionurl=&amp;user=__USERID__</span> </div> </div> <div class="BVDI_FVReportLink BVDI_FVReportLinkInappropriate"><a data-bvjsref="https://livingspaces.ugc.bazaarvoice.com/answers/submit/3534-en_us/product/223508/answer/1595141/inappropriate.djs?authsourcetype=__AUTHTYPE__&amp;format=embeddedhtml&amp;innerreturn=https%3A%2F%2Flivingspaces.ugc.bazaarvoice.com%2Fanswers%2F3534-en_us%2Fproduct%2F223508%2Fquestions.djs%3Fexpandanswer%3D1595141%26expandquestion%3D${randomId}%26format%3Dembeddedhtml&amp;return=https%3A%2F%2Fwww.livingspaces.com%2Fpdp-turdur-sofa-223508&amp;sessionparams=__BVSESSIONPARAMS__&amp;submissionparams=__BVSUBMISSIONPARAMETERS__&amp;submissionurl=&amp;user=__USERID__" data-bvcfg="755200077" href="javascript://" title="" class="BVDILink " name="BV_TrackingTag_Answer_Display_Inappropriate_1595141" role="button" tabindex="0" aria-pressed="false"><span class="BVDILinkSpan">Report inappropriate content</span></a> </div> </div> <div class="BVQASpacer BVQAContentDataSpacer"></div> </div> </div> </div> </div> </div>`;
    };

    // Create random string for unique ID names
    const randomId = () => {
      return (
        Math.random()
          .toString(36)
          .substring(2, 15) +
        Math.random()
          .toString(36)
          .substring(2, 15)
      );
    };

    // function to get value given attribute name from table
    const getAttrValue = (attrName) => {
      // essentially :contains()
      let x = Array.from(document.querySelectorAll("th")).find(
        (el) => el.textContent.search(attrName) > -1
      );
      // the value
      return x.nextElementSibling.innerText;
    };

    //   html generators will go in here
    const questionTemplates = {
      seatHeight: () => {
        return [
          randomId(),
          `Seat Height?`,
          `What is the seat height?`,
          `The seat height is ${getAttrValue("Seat Height")} inches.`,
        ];
      },
      weightCapacity: () => {
        return [
          randomId(),
          `Weight Capacity?`,
          `What is the recommended weight capacity?`,
          `The recommended weight capacity is ${getAttrValue(
            "Recommended Weight Capacity"
          )}lbs.`,
        ];
      },
      seatDetachable: () => {
        detachable = getAttrValue("Seat Type").search("Loose") > -1;
        return [
          randomId(),
          `Detachable Seat Cushions?`,
          `Are the seat cushions detachable?`,
          `${detachable ? "Yes" : "No"} the seat cusions ${
            detachable ? "are" : "aren't"
          } detachable.`,
        ];
      },
      backDetachable: () => {
        detachable = getAttrValue("Back Type").search("Loose") > -1;
        return [
          randomId(),
          `Back Cushions Detachable?`,
          `Are the back cushions detachable?`,
          `${detachable ? "Yes" : "No"} the back cusions ${
            detachable ? "are" : "aren't"
          } detachable.`,
        ];
      },
      removableCustionCovers: () => {
        let removable =
          getAttrValue("Seat Type").search("Loose") > -1 ? true : false;

        return [
          randomId(),
          `Removable Cusion Covers?`,
          `Are the cushion covers removable?`,
          `${removable ? "Yes" : "No"}, the cusion covers ${
            removable ? "are" : "aren't"
          } removable.`,
        ];
      },
      comeAssembled: () => {
        let assemblyRequired = false;
        try {
          getAttrValue("What type of assembly");
          assemblyRequired = true;
        } catch (e) {}

        return [
          randomId(),
          `Comes Assembled?`,
          `Does this come assembled?`,
          `${assemblyRequired ? `No` : "Yes"}, assembly ${
            assemblyRequired ? `is` : "is not"
          } required.`,
        ];
      },
      requireBoxSpring: () => {
        let bs = false;
        let optional = false;
        let returnVal = [];
        if (getAttrValue("Recommended Box Spring").search("Box") > -1) {
          bs = true;
          returnVal = [
            randomId(),
            `Box Spring Needed?`,
            `Does this bed frame require a box spring?`,
            `${bs ? "Yes" : "No"}, this bed frame ${
              bs ? "does" : "does not"
            } require a box spring.`,
          ];
        }
        if (getAttrValue("Recommended Box Spring").search("Optional") > -1) {
          optional = true;
          returnVal = [
            randomId(),
            `Box Spring Needed?`,
            `Does this bed frame require a box spring?`,
            `A box spring is optional for this bed.`,
          ];
        }

        return returnVal;
      },
    };

    // Dont even need to part out the different possibilities, just try them all with try/catch
    let tmpHtml = Object.keys(questionTemplates)
      .map((template) => {
        try {
          let [randomId, questionTitle, question, answer] = eval(
            `questionTemplates.${template}()`
          );
          return formatHtml(randomId, questionTitle, question, answer);
        } catch (e) {
          return "";
        }
      })
      .filter((item) => {
        return item != "";
      })
      .join("");

    return tmpHtml;
  };

  const findSelectorAndInsert = (html) => {
    // Determine where to insert HTML
    if (document.getElementById("BVQANoQuestionsID")) {
      // Handle no questions
      document.getElementById("BVQANoQuestionsID").outerHTML = "";
      document
        .getElementById("BVQAViewQuestionsContentID")
        .insertAdjacentHTML("beforeend", html);
    } else {
      // handle questions exist
      try {
        document
          .getElementById("BVQAQuestionsID")
          .insertAdjacentHTML("afterbegin", html);
      } catch (error) {}
    }
  };

  const makeEventListener = () => {
    document.getElementById("BVQAMainID").addEventListener("click", (e) => {
      window["optimizely"] = window["optimizely"] || [];
      window["optimizely"].push({
        type: "event",
        eventName: "ESX158_ClickReviews",
        tags: {},
      });
    });
  };

  let html = generateHtml();
  findSelectorAndInsert(html);
  makeEventListener();
};

ESX158();
