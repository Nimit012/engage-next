import { Reducer, Store } from 'redux';
import { RouterState } from 'connected-react-router';
import { ContainerState as LanguageProviderState } from 'containers/LanguageProvider/types';
import { ContainerState as HomeState } from 'clients/courseware-template2/containers/App/types';
import { ContainerState as classesState } from 'clients/courseware-template2/containers/Courses/ClassSelection/types';
import { ContainerState as ThemeState } from 'containers/EngageThemeProvider/types';
import { ContainerState as ArchiveBandState } from 'containers/ArchiveBand/types';
import { ContainerState as SnackBarState } from 'containers/SnackbarHandler/types';
import { ContainerState as LanguageSwitcherState } from 'containers/LanguageSwitcher/types';
import { ContainerState as ThemeSwitcherState } from 'containers/ThemeSwitcher/types';
import { ContainerState as LoaderState } from 'containers/FullPageLoaderHandler/types';
import { ContainerState as ClassDetailsState } from 'clients/courseware-template2/containers/TeacherDashboard/types';
import { ContainerState as assignments } from 'clients/courseware-template2/containers/Assignment/hooks/types';
import { ContainerState as ClassUserListState } from 'clients/courseware-template2/containers/ClassUserList/types';
import { ContainerState as UnreadConversationCount } from 'clients/courseware-template2/containers/Conversations/AllConversations/types';
import { ContainerState as BundlesState } from 'clients/courseware-template2/containers/Books/types';
import { ContainerState as BooksState } from 'clients/courseware-template2/containers/MyBooks/types';
import { ContainerState as UserListState } from 'clients/courseware-template2/containers/Classroom/IRAddStudentContainer/types';
import { ContainerState as gradebookState } from 'clients/courseware-template2/containers/GradebookAndAnalytics/IRGradebookDashboardV2/types';
import { ContainerState as UserSpacesState } from 'clients/courseware-template2/containers/UserSpacesList/types';
import { ContainerState as UserProductsState } from 'clients/courseware-template2/containers/UserProductList/types';
import { ContainerState as ActivatedBooksState } from 'clients/courseware-template2/containers/UserActivationsContainer/hook/types';
import { ContainerState as AppState } from 'clients/courseware-template2/containers/App/types';
// import { ContainerState as Axis360State } from 'clients/courseware-template2/containers/Axis360/types';
import { ContainerState as CourseContactState } from 'clients/courseware-template2/containers/CourseContact/types';
import { ContainerState as FeaturesState } from 'state-handlers/feature-state-handlers/types';
import { ContainerState as UserDetailState } from 'clients/courseware-template2/containers/GradebookAndAnalytics/StudentDetailAnalyticsContainer/types';
import { ContainerState as classRecordState } from 'clients/courseware-template2/containers/GradebookAndAnalytics/IRProductAnalytics/types';
import { ContainerState as ProductsState } from '../clients/courseware-template2/containers/ProductTOCContainer/types';
import { ContainerState as PreviewRoleState } from 'containers/PreviewRoleProvider/types';
import { ContainerState as AppConfigState } from 'clients/courseware-template2/containers/UseAppConfig/types';
import { ContainerState as ConversationDetailsState } from 'clients/courseware-template2/containers/Conversations/ConversationDetails/types';
import { ContainerState as NewConversationState } from 'clients/courseware-template2/containers/Conversations/NewConversation/types';
import { ContainerState as BundleState } from 'hooks/bundles/types';
import { ContainerState as UserNotificationsState } from 'clients/courseware-template2/containers/NotificationContainer/types';
import { ContainerState as SidebarItemsState } from 'containers/SidebarContainer/types';
import { ContainerState as AppShellState } from 'containers/AppShell/types';
import { ContainerState as GlobalProductState } from 'clients/courseware-template2/containers/IRBrowseResourceContainer/types';
import { ContainerState as Playlist } from 'clients/courseware-template2/containers/Playlist/types';
import { ContainerState as ActivationState } from 'clients/courseware-template2/containers/ActivationContainer/types';
import { ContainerState as ResumePoint } from 'containers/LastAccessed/types';
import { ContainerState as mruActivities } from 'clients/courseware-template2/containers/RecentActivities/types';
import { ContainerState as FetchIndexData } from 'clients/courseware-template2/containers/FetchIndexData/types';
import { ContainerState as FetchGRIndexData } from 'clients/courseware-template2/containers/FetchGRIndexData/types';
import { ContainerState as LPModalWrapperState } from 'clients/courseware-template2/containers/LearningPathModalWrapper/types';
import { ContainerState as ViewAllCollectionState } from 'clients/courseware-template2/containers/IRViewAllCollection/types';
import { ContainerState as FamilyViewAllCollectionState } from 'clients/courseware-template2/containers/IRFamilyViewAllCollection/types';
import { ContainerState as UserSettings } from 'containers/Settings/types';
import { ContainerState as classPendingSubmissions } from 'clients/courseware-template2/containers/Inbox/types';
import { ContainerState as assignmentViewerData } from 'clients/courseware-template2/containers/AssignmentViewerConatiner/types';
import { ContainerState as flipbookState } from 'clients/courseware-template2/containers/Flipbook/hooks/types';
import { ContainerState as classProductsMetaState } from 'clients/courseware-template2/containers/TeacherDashboard/BookDetails/types';
import { ContainerState as insightsState } from 'clients/courseware-template2/containers/Insights/hooks/types';
import { ContainerState as BundleJsonsState } from 'clients/courseware-template2/containers/PlaylistViewerContainer/types';
import { ContainerStatev4 as ProductsStatev4 } from '../clients/courseware-template2/containers/ProductTOCContainer/types';
import { ContainerState as timeseriesState } from 'clients/courseware-template2/containers/Insights/hooks/timeseries/types';
import { ContainerState as QuestionState } from 'clients/courseware-template2/containers/PreviewQuestionsContainer/QuestionHooks/types';
import { ContainerState as materialState } from 'clients/courseware-template2/containers/MaterialContent/context/questions/types';

export interface InjectedStore extends Store {
  injectedReducers: any;
  injectedSagas: any;
  runSaga(saga: (() => IterableIterator<any>) | undefined, args: any | undefined): any;
}

export interface InjectReducerParams {
  key: keyof ApplicationRootState;
  reducer: Reducer<any, any>;
}

export interface InjectSagaParams {
  key: keyof ApplicationRootState;
  saga: () => IterableIterator<any>;
  mode?: string | undefined;
}

// Your root reducer type, which is your redux state types also
export interface ApplicationRootState {
  readonly router: RouterState;
  readonly language: LanguageProviderState;
  readonly home: HomeState;
  readonly theme: ThemeState;
  // for testing purposes
  readonly test: any;
  readonly snackbar: SnackBarState;
  readonly loader: LoaderState;
  readonly classDetails: ClassDetailsState;
  readonly classes: classesState;
  readonly userDetailAnalytics: UserDetailState;
  readonly gradebookAnalytics: gradebookState;
  readonly languageSwitcher: LanguageSwitcherState;
  readonly lpModalWrapper: LPModalWrapperState;
  readonly themeSwitcher: ThemeSwitcherState;
  readonly assignments: assignments;
  readonly classUserList: ClassUserListState;
  readonly unreadCoversationCount: UnreadConversationCount;
  readonly allConversations: UnreadConversationCount;
  readonly bundleJsons: BundleJsonsState;
  readonly bundles: BundlesState;
  readonly umbrellaFamiliesandBundles: BundlesState;
  readonly userList: UserListState;
  readonly userSpaces: UserSpacesState;
  readonly userProducts: UserProductsState;
  readonly activatedBooks: ActivatedBooksState;
  readonly courseContact: CourseContactState;
  readonly app: AppState;
  // readonly axis360: Axis360State;
  readonly featuresState: FeaturesState;
  readonly archiveBand: ArchiveBandState;
  readonly products: ProductsState;
  readonly productJsons: ProductsStatev4;
  readonly classRecord: classRecordState;
  readonly appConfig: AppConfigState;
  readonly previewRole: PreviewRoleState;
  readonly bundleState: BundleState;
  readonly books: BooksState;
  readonly notifications: UserNotificationsState;
  readonly conversationDetails: ConversationDetailsState;
  readonly newConversation: NewConversationState;
  readonly sidebarState: SidebarItemsState;
  readonly appShellState: AppShellState;
  readonly globalProducts: GlobalProductState;
  readonly playlist: Playlist;
  readonly mruActivities: mruActivities;
  readonly mruMaterials: mruMaterials;
  readonly resumePoint: ResumePoint;
  readonly fetchIndexData: FetchIndexData;
  readonly fetchGRIndexData: FetchGRIndexData;
  readonly activationState: ActivationState;
  readonly viewAllCollection: ViewAllCollectionState;
  readonly familyViewAllCollection: FamilyViewAllCollectionState;
  readonly userSettings: UserSettings;
  readonly classPendingSubmissions: classPendingSubmissions;
  readonly assignmentViewerData: assignmentViewerData;
  readonly flipbookData: flipbookState;
  readonly classBundleProductsMeta: classProductsMetaState;
  readonly insights: insightsState;
  readonly timeseriesData: timeseriesState;
  readonly materialData: materialState;
  readonly questionPreview: QuestionState;
  readonly tags: tagsState;
}
