import type { Struct, Schema } from '@strapi/strapi';

export interface TextEditorShortText extends Struct.ComponentSchema {
  collectionName: 'components_text_editor_short_texts';
  info: {
    displayName: 'short_text';
    icon: 'pencil';
    description: '';
  };
  attributes: {
    name: Schema.Attribute.Text & Schema.Attribute.Required;
  };
}

export interface TextEditorRichText extends Struct.ComponentSchema {
  collectionName: 'components_text_editor_rich_texts';
  info: {
    displayName: 'rich_text';
    icon: 'pencil';
  };
  attributes: {
    text: Schema.Attribute.Blocks & Schema.Attribute.Required;
  };
}

export interface TextEditorIframe extends Struct.ComponentSchema {
  collectionName: 'components_text_editor_iframes';
  info: {
    displayName: 'iframe';
    icon: 'code';
  };
  attributes: {
    code: Schema.Attribute.Text & Schema.Attribute.Required;
  };
}

export interface TextEditorButtonLink extends Struct.ComponentSchema {
  collectionName: 'components_text_editor_button_links';
  info: {
    displayName: 'button_link';
    icon: 'attachment';
  };
  attributes: {
    name: Schema.Attribute.String & Schema.Attribute.Required;
    link: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface TextEditorButtonFile extends Struct.ComponentSchema {
  collectionName: 'components_text_editor_button_files';
  info: {
    displayName: 'button_file';
    icon: 'book';
    description: '';
  };
  attributes: {
    file: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'> &
      Schema.Attribute.Required;
    name: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SectionsTitleText extends Struct.ComponentSchema {
  collectionName: 'components_sections_title_texts';
  info: {
    displayName: 'title_text';
    icon: 'pencil';
  };
  attributes: {
    title: Schema.Attribute.String & Schema.Attribute.Required;
    text: Schema.Attribute.Text & Schema.Attribute.Required;
  };
}

export interface PostSelectResource extends Struct.ComponentSchema {
  collectionName: 'components_post_select_resources';
  info: {
    displayName: 'resource';
    icon: 'manyWays';
  };
  attributes: {};
}

export interface PostSelectNewsletter extends Struct.ComponentSchema {
  collectionName: 'components_post_select_newsletters';
  info: {
    displayName: 'newsletter';
    icon: 'manyWays';
  };
  attributes: {};
}

export interface PostSelectEvent extends Struct.ComponentSchema {
  collectionName: 'components_post_select_events';
  info: {
    displayName: 'event';
    icon: 'manyWays';
  };
  attributes: {};
}

export interface PostSelectBlogPost extends Struct.ComponentSchema {
  collectionName: 'components_post_select_blog_posts';
  info: {
    displayName: 'blog-post';
    icon: 'manyWays';
  };
  attributes: {
    blog_posts: Schema.Attribute.Relation<
      'oneToMany',
      'api::blog-post.blog-post'
    >;
  };
}

export interface MultiSelectVulnerability extends Struct.ComponentSchema {
  collectionName: 'components_multi_select_vulnerabilities';
  info: {
    displayName: 'Vulnerability';
    icon: 'bulletList';
    description: '';
  };
  attributes: {
    options: Schema.Attribute.Enumeration<
      [
        'Age',
        'Gender',
        'Disability',
        'Ill_health',
        'Ethnicity/Nationality/Clan_affiliation',
        'Political_opinion',
        'Religious_belief',
        'Sexual_orientation',
        'Indigenous_Peoples',
        'Stateless_person',
        'Internally_displaced_person',
        'Other',
      ]
    > &
      Schema.Attribute.Required;
  };
}

export interface MultiSelectRight extends Struct.ComponentSchema {
  collectionName: 'components_multi_select_rights';
  info: {
    displayName: 'right';
    icon: 'bulletList';
  };
  attributes: {
    options: Schema.Attribute.Enumeration<
      [
        'Right_to_Life',
        'Prohibition_of_Torture_Inhumane_and_Degrading_Treatment',
        'Right_to_Private/Family_Life',
        'Right_to_Healthy_Environment',
        'Environment',
        'Other',
      ]
    > &
      Schema.Attribute.Required;
  };
}

export interface MultiSelectProceduralOrSubstantiveIssues
  extends Struct.ComponentSchema {
  collectionName: 'components_multi_select_procedural_or_substantive_issues';
  info: {
    displayName: 'procedural_or_substantive_issues';
    icon: 'bulletList';
  };
  attributes: {
    options: Schema.Attribute.Enumeration<
      [
        'Procedural',
        'Substantive',
        'Both',
        'N/A_case_is_relevant_only_for_obiter_dicta',
      ]
    > &
      Schema.Attribute.Required;
  };
}

export interface MultiSelectInternalOrCrossBorder
  extends Struct.ComponentSchema {
  collectionName: 'components_multi_select_internal_or_cross_borders';
  info: {
    displayName: 'internal_or_cross_border';
    icon: 'bulletList';
    description: '';
  };
  attributes: {
    options: Schema.Attribute.Enumeration<
      ['Internal', 'Cross-border', 'Both']
    > &
      Schema.Attribute.Required;
  };
}

export interface MultiSelectHazard extends Struct.ComponentSchema {
  collectionName: 'components_multi_select_hazards';
  info: {
    displayName: 'hazard';
    icon: 'bulletList';
    description: '';
  };
  attributes: {
    options: Schema.Attribute.Enumeration<
      [
        'Cyclone',
        'Drought',
        'Earthquake',
        'Flood',
        'Heatwave',
        'Hurricane',
        'Landslide',
        'Sea_Level_Rise',
        'Tsunami',
        'Typhoon',
        'Wildfire',
        'Climate_change',
        'Environmental_Degradation',
        'Epidemic/Pandemic/Other',
        'Other',
      ]
    > &
      Schema.Attribute.Required;
  };
}

export interface MultiSelectDecisionInJudgment extends Struct.ComponentSchema {
  collectionName: 'components_multi_select_decision_in_judgments';
  info: {
    displayName: 'decision_in_judgment';
    icon: 'bulletList';
  };
  attributes: {
    options: Schema.Attribute.Enumeration<
      ['In_favor_of_the_State', 'In_favor_of_the_applicant']
    > &
      Schema.Attribute.Required;
  };
}

export interface MultiSelectCourtInstance extends Struct.ComponentSchema {
  collectionName: 'components_multi_select_court_instances';
  info: {
    displayName: 'court_instance';
    icon: 'bulletList';
  };
  attributes: {
    options: Schema.Attribute.Enumeration<
      ['First', 'Second', 'Third', 'Final']
    > &
      Schema.Attribute.Required;
  };
}

export interface MultiSelectCategory extends Struct.ComponentSchema {
  collectionName: 'components_multi_select_categories';
  info: {
    displayName: 'category';
    icon: 'bulletList';
    description: '';
  };
  attributes: {
    options: Schema.Attribute.Enumeration<
      ['Category_1', 'Category_2', 'Category_3']
    > &
      Schema.Attribute.Required;
  };
}

export interface MultiSelectApplicantDescription
  extends Struct.ComponentSchema {
  collectionName: 'components_multi_select_applicant_descriptions';
  info: {
    displayName: 'applicant_description';
    icon: 'bulletList';
    description: '';
  };
  attributes: {
    options: Schema.Attribute.Enumeration<
      [
        'Adult_man',
        'Adult_woman',
        'Family/couple_with_children',
        'Family/couple_without_children',
        'Mother_with_child/ren',
        'Father_with_child/ren',
        'Family/couple_with_adult_children_(+_18)',
        'Boy_child_as_main_applicant',
        'Girl_child_as_main_applicant',
        'Boy_or/and_girl_children_as_main_applicants',
        'Boy_children_as_main_applicants',
        'Girl_children_as_main_applicants',
        'Other',
      ]
    > &
      Schema.Attribute.Required;
  };
}

export interface MultiSelectAppeal extends Struct.ComponentSchema {
  collectionName: 'components_multi_select_appeals';
  info: {
    displayName: 'appeal';
    icon: 'bulletList';
    description: '';
  };
  attributes: {
    options: Schema.Attribute.Enumeration<
      [
        'Yes_(and_an_appeal_was_filed_and_decided_upon_in_a_higher_court)',
        'Yes_(and_the_appeal_is_pending)',
        'No',
        'Unknown',
      ]
    > &
      Schema.Attribute.Required;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'text-editor.short-text': TextEditorShortText;
      'text-editor.rich-text': TextEditorRichText;
      'text-editor.iframe': TextEditorIframe;
      'text-editor.button-link': TextEditorButtonLink;
      'text-editor.button-file': TextEditorButtonFile;
      'sections.title-text': SectionsTitleText;
      'post-select.resource': PostSelectResource;
      'post-select.newsletter': PostSelectNewsletter;
      'post-select.event': PostSelectEvent;
      'post-select.blog-post': PostSelectBlogPost;
      'multi-select.vulnerability': MultiSelectVulnerability;
      'multi-select.right': MultiSelectRight;
      'multi-select.procedural-or-substantive-issues': MultiSelectProceduralOrSubstantiveIssues;
      'multi-select.internal-or-cross-border': MultiSelectInternalOrCrossBorder;
      'multi-select.hazard': MultiSelectHazard;
      'multi-select.decision-in-judgment': MultiSelectDecisionInJudgment;
      'multi-select.court-instance': MultiSelectCourtInstance;
      'multi-select.category': MultiSelectCategory;
      'multi-select.applicant-description': MultiSelectApplicantDescription;
      'multi-select.appeal': MultiSelectAppeal;
    }
  }
}
